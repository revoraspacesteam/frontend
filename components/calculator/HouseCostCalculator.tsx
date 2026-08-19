"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HighlightLabel } from "@/components/ui/HighlightLabel";
import {
  calculateEstimate,
  categories,
  defaultSelection,
  formatInr,
  matchPreset,
  presets,
  type Estimate,
  type PresetId,
  type QuantityItem,
  type Selection,
} from "@/lib/calculator/catalog";
import type { Dictionary } from "@/lib/i18n/en";

const fieldClass =
  "h-12 w-full min-w-0 border border-[#F6E0BE] bg-[#FBF8F4] px-4 text-sm text-ink outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D5B27F] focus:bg-white";

const FLOORS = [
  { value: 1, key: "ground" },
  { value: 2, key: "g1" },
  { value: 3, key: "g2" },
  { value: 4, key: "g3" },
] as const;

type CalculatorCopy = Dictionary["calculator"];

function optionCopy(
  copy: CalculatorCopy,
  categoryId: string,
  optionId: string,
) {
  const group = copy.options[categoryId as keyof typeof copy.options] as
    | Record<string, { name: string; note: string }>
    | undefined;
  return group?.[optionId] ?? { name: optionId, note: "" };
}

function categoryCopy(copy: CalculatorCopy, categoryId: string) {
  return copy.categories[categoryId as keyof typeof copy.categories];
}

function unitLabel(copy: CalculatorCopy, unit: string) {
  return copy.units[unit as keyof typeof copy.units] ?? unit;
}

function quantityLabel(
  copy: CalculatorCopy,
  item: QuantityItem,
  selection: Selection,
) {
  if (item.id === "sand") return copy.extras.sand;
  if (item.id === "aggregate") return copy.extras.aggregate;
  if (item.id === "cement") {
    return optionCopy(copy, "cement", selection.cement).name || copy.extras.cement;
  }
  if (item.id === "steel") {
    return optionCopy(copy, "steel", selection.steel).name || copy.extras.steel;
  }
  if (item.id === "masonry") {
    return (
      optionCopy(copy, "masonry", selection.masonry).name || copy.extras.masonry
    );
  }
  return item.label;
}

function BrickWall() {
  const cols = 28;
  const rows = 18;

  return (
    <div className="flex h-full items-center justify-center opacity-70">
      {Array.from({ length: cols }, (_, col) => (
        <div key={col} className={col === 0 ? undefined : "-ml-[0.5px]"}>
          {Array.from({ length: rows }, (_, row) => (
            <div
              key={row}
              className={`h-[48px] w-[110px] shrink-0 border border-[#F6E0BE] ${
                row > 0 ? "-mt-[0.5px]" : ""
              } ${row % 2 === 1 ? "-ml-[48px]" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function SummaryCard({
  estimate,
  activePreset,
  copy,
  selection,
}: {
  estimate: Estimate;
  activePreset: PresetId | "custom";
  copy: CalculatorCopy;
  selection: Selection;
}) {
  const presetLabel =
    activePreset === "custom"
      ? copy.customMix
      : copy.presets[activePreset].label;

  return (
    <div className="border border-[#F6E0BE] bg-white p-5 shadow-[0_18px_50px_rgba(40,30,20,0.08)] sm:p-6">
      <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
        {copy.summaryTitle}
      </p>
      <p className="font-display mt-2 text-[28px] leading-tight text-[#D1973F] sm:text-[32px]">
        {formatInr(estimate.low, true)} – {formatInr(estimate.high, true)}
      </p>
      <p className="mt-1 text-sm text-muted">
        {formatInr(estimate.total)} {copy.midEstimate} · {presetLabel}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="border border-[#F6E0BE] bg-[#FBF8F4] px-3 py-3">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            {copy.perSqftLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {formatInr(estimate.perSqft)}
          </p>
        </div>
        <div className="border border-[#F6E0BE] bg-[#FBF8F4] px-3 py-3">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            {copy.builtUp}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {estimate.area.toLocaleString("en-IN")} {copy.sqft}
          </p>
        </div>
        <div className="border border-[#F6E0BE] bg-[#FBF8F4] px-3 py-3">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            {copy.materials}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {formatInr(estimate.materialsPerSqft)}
            {copy.perSqftSuffix}
          </p>
        </div>
        <div className="border border-[#F6E0BE] bg-[#FBF8F4] px-3 py-3">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            {copy.labour}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {formatInr(estimate.labourPerSqft)}
            {copy.perSqftSuffix}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {copy.costBySelection}
        </p>
        <ul className="mt-3 space-y-2.5">
          {estimate.lines.map((line) => {
            const share = estimate.total > 0 ? line.total / estimate.total : 0;
            const category = categoryCopy(copy, line.categoryId);
            const option = optionCopy(
              copy,
              line.categoryId,
              selection[line.categoryId],
            );
            return (
              <li key={line.categoryId}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-ink">{category.title}</span>
                  <span className="shrink-0 font-medium text-ink">
                    {formatInr(line.total, true)}
                  </span>
                </div>
                <p className="text-[11px] text-muted">{option.name}</p>
                <div className="mt-1 h-1 w-full bg-[#F6E0BE]">
                  <div
                    className="h-1 bg-[#D1973F]"
                    style={{ width: `${Math.max(share * 100, 2)}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 border-t border-[#F6E0BE] pt-5">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {copy.quantitiesTitle}
        </p>
        <ul className="mt-3 space-y-2">
          {estimate.quantities.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted">
                {quantityLabel(copy, item, selection)}
              </span>
              <span className="font-medium text-ink">
                {item.amount.toLocaleString("en-IN")} {unitLabel(copy, item.unit)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-muted">
        {copy.disclaimer}
      </p>

      <Link
        href="/#contact"
        className="mt-5 inline-flex h-12 w-full items-center justify-center bg-[#1C1C1C] text-sm font-medium text-white transition hover:bg-[#2A2A2A]"
      >
        {copy.quoteCta}
      </Link>
    </div>
  );
}

export function HouseCostCalculator() {
  const { t } = useLanguage();
  const copy = t.calculator;
  const [area, setArea] = useState(1200);
  const [areaDraft, setAreaDraft] = useState("1200");
  const [floors, setFloors] = useState(1);
  const [selection, setSelection] = useState<Selection>(defaultSelection);

  const activePreset = matchPreset(selection);
  const estimate = useMemo(
    () => calculateEstimate(area, floors, selection),
    [area, floors, selection],
  );

  function commitArea(raw: string) {
    const parsed = Number(raw.replace(/,/g, ""));
    if (!Number.isFinite(parsed)) {
      setAreaDraft(String(area));
      return;
    }
    const next = Math.max(100, Math.min(20000, Math.round(parsed)));
    setArea(next);
    setAreaDraft(String(next));
  }

  function applyPreset(id: PresetId) {
    const preset = presets.find((item) => item.id === id);
    if (preset) setSelection({ ...preset.picks });
  }

  function pickOption(categoryId: string, optionId: string) {
    setSelection((current) => ({ ...current, [categoryId]: optionId }));
  }

  return (
    <div className="relative isolate min-h-dvh overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <BrickWall />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 ">
        <Link
          href="/"
          className="text-sm sm:hidden font-medium text-ink transition hover:text-gold"
        >
          {copy.back}
        </Link>

        <div className="mt-6 max-w-3xl">
          <HighlightLabel>{copy.badge}</HighlightLabel>
          <h1 className="font-display mt-4 text-[28px] leading-tight text-[#D1973F] sm:text-[36px] lg:text-[40px]">
            {copy.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink sm:text-base">
            {copy.body}
          </p>
        </div>

        <div className="mt-8 lg:hidden">
          <SummaryCard
            estimate={estimate}
            activePreset={activePreset}
            copy={copy}
            selection={selection}
          />
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <section className="border border-[#F6E0BE] bg-white p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {copy.step1}
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-3">
                <label className="block min-w-[160px] flex-1 text-xs text-muted">
                  {copy.areaLabel}
                  <input
                    inputMode="numeric"
                    value={areaDraft}
                    onChange={(e) => setAreaDraft(e.target.value)}
                    onBlur={() => commitArea(areaDraft)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitArea(areaDraft);
                    }}
                    className={`${fieldClass} mt-1`}
                    aria-label={copy.areaAria}
                  />
                </label>
                <span className="mb-3 text-sm text-muted">{copy.sqft}</span>
              </div>
              <input
                type="range"
                min={300}
                max={8000}
                step={50}
                value={Math.min(area, 8000)}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setArea(next);
                  setAreaDraft(String(next));
                }}
                className="mt-4 w-full accent-[#D1973F]"
              />

              <p className="mt-6 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {copy.storeys}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FLOORS.map((floor) => (
                  <button
                    key={floor.value}
                    type="button"
                    onClick={() => setFloors(floor.value)}
                    className={`h-12 px-2 text-sm font-medium transition ${
                      floors === floor.value
                        ? "bg-[#1C1C1C] text-white"
                        : "border border-[#F6E0BE] bg-[#FBF8F4] text-[#1C1C1C]"
                    }`}
                  >
                    {copy.floors[floor.key]}
                  </button>
                ))}
              </div>
            </section>

            <section className="border border-[#F6E0BE] bg-white p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {copy.step2}
              </p>
              <p className="mt-1 text-sm text-muted">{copy.step2Note}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset.id)}
                    className={`px-3 py-3 text-left transition ${
                      activePreset === preset.id
                        ? "bg-[#1C1C1C] text-white"
                        : "border border-[#F6E0BE] bg-[#FBF8F4] text-ink"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {copy.presets[preset.id].label}
                    </span>
                    <span
                      className={`mt-0.5 block text-[11px] ${
                        activePreset === preset.id
                          ? "text-white/70"
                          : "text-muted"
                      }`}
                    >
                      {copy.presets[preset.id].tagline}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="border border-[#F6E0BE] bg-white p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {copy.step3}
              </p>
              <p className="mt-1 text-sm text-muted">{copy.step3Note}</p>

              <div className="mt-6 space-y-8">
                {categories.map((category) => {
                  const selectedId = selection[category.id];
                  const translated = categoryCopy(copy, category.id);
                  return (
                    <div key={category.id}>
                      <div className="flex flex-wrap items-end justify-between gap-2">
                        <div>
                          <h2 className="text-sm font-semibold text-ink">
                            {translated.title}
                          </h2>
                          <p className="text-xs text-muted">{translated.hint}</p>
                        </div>
                        <p className="text-xs text-[#D1973F]">
                          {formatInr(
                            estimate.lines.find(
                              (line) => line.categoryId === category.id,
                            )?.ratePerSqft ?? 0,
                          )}
                          {copy.perSqftSuffix}
                        </p>
                      </div>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {category.options.map((option) => {
                          const selected = selectedId === option.id;
                          const translatedOption = optionCopy(
                            copy,
                            category.id,
                            option.id,
                          );
                          return (
                            <button
                              key={option.id}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => pickOption(category.id, option.id)}
                              className={`px-3 py-3 text-left transition ${
                                selected
                                  ? "bg-[#1C1C1C] text-white"
                                  : "border border-[#F6E0BE] bg-[#FBF8F4] text-ink hover:border-[#D5B27F]"
                              }`}
                            >
                              <span className="flex items-start justify-between gap-3">
                                <span className="text-sm font-semibold">
                                  {translatedOption.name}
                                </span>
                                <span className="shrink-0 text-xs font-medium">
                                  {formatInr(option.ratePerSqft)}
                                </span>
                              </span>
                              <span
                                className={`mt-0.5 block text-[11px] ${
                                  selected ? "text-white/70" : "text-muted"
                                }`}
                              >
                                {translatedOption.note}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="sticky top-6 hidden lg:block">
            <SummaryCard
              estimate={estimate}
              activePreset={activePreset}
              copy={copy}
              selection={selection}
            />
          </aside>
        </div>
      </div>

      <div className="sticky bottom-0 z-20 border-t border-[#F6E0BE] bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-wide text-muted uppercase">
              {copy.approxTotal}
            </p>
            <p className="text-sm font-semibold text-ink">
              {formatInr(estimate.low, true)} – {formatInr(estimate.high, true)}
            </p>
          </div>
          <p className="text-xs text-muted">
            {formatInr(estimate.perSqft)}
            {copy.perSqftSuffix}
          </p>
        </div>
      </div>
    </div>
  );
}

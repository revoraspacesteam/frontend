export type MaterialOption = {
  id: string;
  name: string;
  note: string;
  ratePerSqft: number;
  qtyPerSqft?: number;
  qtyUnit?: string;
};

export type MaterialCategory = {
  id: string;
  title: string;
  hint: string;
  options: MaterialOption[];
};

export type PresetId = "economy" | "standard" | "premium" | "luxury";

export type Selection = Record<string, string>;

export const presets: {
  id: PresetId;
  label: string;
  tagline: string;
  picks: Selection;
}[] = [
  {
    id: "economy",
    label: "Economy",
    tagline: "Solid basics, value-led finishes",
    picks: {
      masonry: "red-brick",
      cement: "ppc",
      steel: "fe500",
      flooring: "ceramic",
      walls: "distemper",
      openings: "flush-alu",
      kitchen: "basic",
      bath: "basic",
      electrical: "basic",
      plumbing: "pvc",
      waterproof: "bitumen",
      labour: "local",
    },
  },
  {
    id: "standard",
    label: "Standard",
    tagline: "Most common home specification",
    picks: {
      masonry: "fly-ash",
      cement: "opc43",
      steel: "fe550",
      flooring: "vitrified",
      walls: "emulsion",
      openings: "laminate-alu",
      kitchen: "standard",
      bath: "standard",
      electrical: "standard",
      plumbing: "cpvc",
      waterproof: "chemical",
      labour: "skilled",
    },
  },
  {
    id: "premium",
    label: "Premium",
    tagline: "Better brands and lasting finishes",
    picks: {
      masonry: "aac",
      cement: "opc53",
      steel: "fe550",
      flooring: "double-charge",
      walls: "luxury-paint",
      openings: "teak-upvc",
      kitchen: "premium",
      bath: "premium",
      electrical: "premium",
      plumbing: "ppr",
      waterproof: "membrane",
      labour: "premium",
    },
  },
  {
    id: "luxury",
    label: "Luxury",
    tagline: "Designer materials and detailing",
    picks: {
      masonry: "aac",
      cement: "opc53",
      steel: "fe600",
      flooring: "marble",
      walls: "texture",
      openings: "designer",
      kitchen: "luxury",
      bath: "luxury",
      electrical: "smart",
      plumbing: "ppr",
      waterproof: "membrane",
      labour: "premium",
    },
  },
];

export const categories: MaterialCategory[] = [
  {
    id: "masonry",
    title: "Masonry & walls",
    hint: "What the house is built with",
    options: [
      {
        id: "red-brick",
        name: "Red clay bricks",
        note: "Traditional, widely available",
        ratePerSqft: 165,
        qtyPerSqft: 8,
        qtyUnit: "bricks",
      },
      {
        id: "fly-ash",
        name: "Fly ash bricks",
        note: "Smoother face, lower water use",
        ratePerSqft: 155,
        qtyPerSqft: 8,
        qtyUnit: "bricks",
      },
      {
        id: "aac",
        name: "AAC blocks",
        note: "Lighter, better insulation",
        ratePerSqft: 195,
        qtyPerSqft: 4.2,
        qtyUnit: "blocks",
      },
      {
        id: "concrete",
        name: "Concrete blocks",
        note: "High strength, faster laying",
        ratePerSqft: 175,
        qtyPerSqft: 6,
        qtyUnit: "blocks",
      },
    ],
  },
  {
    id: "cement",
    title: "Cement",
    hint: "RCC, plaster and masonry",
    options: [
      {
        id: "ppc",
        name: "PPC (blended)",
        note: "Everyday RCC & plaster",
        ratePerSqft: 90,
        qtyPerSqft: 0.38,
        qtyUnit: "bags",
      },
      {
        id: "opc43",
        name: "OPC 43",
        note: "Standard structural grade",
        ratePerSqft: 100,
        qtyPerSqft: 0.4,
        qtyUnit: "bags",
      },
      {
        id: "opc53",
        name: "OPC 53",
        note: "High-strength RCC",
        ratePerSqft: 112,
        qtyPerSqft: 0.42,
        qtyUnit: "bags",
      },
    ],
  },
  {
    id: "steel",
    title: "TMT steel",
    hint: "Beams, slabs and columns",
    options: [
      {
        id: "fe500",
        name: "Fe 500 TMT",
        note: "Residential baseline",
        ratePerSqft: 210,
        qtyPerSqft: 3.8,
        qtyUnit: "kg",
      },
      {
        id: "fe550",
        name: "Fe 550 D TMT",
        note: "Better ductility",
        ratePerSqft: 235,
        qtyPerSqft: 4,
        qtyUnit: "kg",
      },
      {
        id: "fe600",
        name: "Fe 600 TMT",
        note: "Heavier / taller frames",
        ratePerSqft: 260,
        qtyPerSqft: 4.3,
        qtyUnit: "kg",
      },
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    hint: "Living, bedrooms and circulation",
    options: [
      {
        id: "ceramic",
        name: "Ceramic tiles",
        note: "Budget rooms & utilities",
        ratePerSqft: 70,
      },
      {
        id: "vitrified",
        name: "Vitrified 2×2",
        note: "Most common home floor",
        ratePerSqft: 125,
      },
      {
        id: "double-charge",
        name: "Double-charge vitrified",
        note: "Denser, longer wear",
        ratePerSqft: 185,
      },
      {
        id: "granite",
        name: "Granite",
        note: "Hard stone, low upkeep",
        ratePerSqft: 280,
      },
      {
        id: "marble",
        name: "Italian marble",
        note: "Luxury living floors",
        ratePerSqft: 420,
      },
    ],
  },
  {
    id: "walls",
    title: "Wall finish",
    hint: "Putty, primer and paint",
    options: [
      {
        id: "distemper",
        name: "Distemper",
        note: "Basic interior coat",
        ratePerSqft: 28,
      },
      {
        id: "emulsion",
        name: "Plastic emulsion",
        note: "Washable standard finish",
        ratePerSqft: 48,
      },
      {
        id: "luxury-paint",
        name: "Luxury emulsion",
        note: "Richer sheen, better cover",
        ratePerSqft: 78,
      },
      {
        id: "texture",
        name: "Texture + luxury paint",
        note: "Feature walls & detailing",
        ratePerSqft: 110,
      },
    ],
  },
  {
    id: "openings",
    title: "Doors & windows",
    hint: "Frames, shutters and hardware",
    options: [
      {
        id: "flush-alu",
        name: "Flush doors + aluminium",
        note: "Economy openings",
        ratePerSqft: 85,
      },
      {
        id: "laminate-alu",
        name: "Laminate doors + aluminium",
        note: "Standard homes",
        ratePerSqft: 120,
      },
      {
        id: "teak-upvc",
        name: "Teak doors + UPVC",
        note: "Better seal and life",
        ratePerSqft: 175,
      },
      {
        id: "designer",
        name: "Designer wood + premium UPVC",
        note: "Custom joinery",
        ratePerSqft: 240,
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    hint: "Carcass, shutters and counter",
    options: [
      {
        id: "basic",
        name: "Basic modular",
        note: "Plywood + laminate",
        ratePerSqft: 70,
      },
      {
        id: "standard",
        name: "BWP + laminate",
        note: "Moisture-resistant carcass",
        ratePerSqft: 130,
      },
      {
        id: "premium",
        name: "Marine ply + quartz",
        note: "Soft-close, stone top",
        ratePerSqft: 220,
      },
      {
        id: "luxury",
        name: "PU + imported fittings",
        note: "Designer kitchen",
        ratePerSqft: 360,
      },
    ],
  },
  {
    id: "bath",
    title: "Bath fittings",
    hint: "Sanitaryware and CP fittings",
    options: [
      {
        id: "basic",
        name: "Economy sanitaryware",
        note: "Essential fixtures",
        ratePerSqft: 38,
      },
      {
        id: "standard",
        name: "Standard branded",
        note: "Everyday Jaquar / Hindware class",
        ratePerSqft: 72,
      },
      {
        id: "premium",
        name: "Premium suite",
        note: "Better ceramics & CP",
        ratePerSqft: 130,
      },
      {
        id: "luxury",
        name: "Luxury suite",
        note: "Kohler / Grohe class",
        ratePerSqft: 200,
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    hint: "Wiring, boards and switches",
    options: [
      {
        id: "basic",
        name: "Basic wiring",
        note: "ISI cables & switches",
        ratePerSqft: 48,
      },
      {
        id: "standard",
        name: "Branded standard",
        note: "Havells-class hardware",
        ratePerSqft: 78,
      },
      {
        id: "premium",
        name: "Premium modular",
        note: "Legrand-class plates",
        ratePerSqft: 115,
      },
      {
        id: "smart",
        name: "Smart-home ready",
        note: "Extra circuits & automation",
        ratePerSqft: 165,
      },
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    hint: "Pipes, traps and concealed lines",
    options: [
      {
        id: "pvc",
        name: "PVC",
        note: "Budget concealed lines",
        ratePerSqft: 35,
      },
      {
        id: "cpvc",
        name: "CPVC",
        note: "Hot & cold residential",
        ratePerSqft: 52,
      },
      {
        id: "ppr",
        name: "PPR / composite",
        note: "Longer life, fewer joints",
        ratePerSqft: 78,
      },
    ],
  },
  {
    id: "waterproof",
    title: "Waterproofing",
    hint: "Terrace, wet areas and tanks",
    options: [
      {
        id: "bitumen",
        name: "Bitumen coat",
        note: "Basic terrace protection",
        ratePerSqft: 22,
      },
      {
        id: "chemical",
        name: "Chemical waterproofing",
        note: "Bath, kitchen, terrace",
        ratePerSqft: 40,
      },
      {
        id: "membrane",
        name: "Membrane + chemical",
        note: "Premium terrace system",
        ratePerSqft: 62,
      },
    ],
  },
  {
    id: "labour",
    title: "Labour & supervision",
    hint: "Civil, finishing and site coordination",
    options: [
      {
        id: "local",
        name: "Local crew",
        note: "Trade labour only",
        ratePerSqft: 420,
      },
      {
        id: "skilled",
        name: "Skilled coordinated crew",
        note: "Single-point supervision",
        ratePerSqft: 540,
      },
      {
        id: "premium",
        name: "Premium finishing crew",
        note: "Tighter QA and snagging",
        ratePerSqft: 680,
      },
    ],
  },
];

export const defaultSelection: Selection = { ...presets[1].picks };

export function getOption(
  categoryId: string,
  optionId: string,
): MaterialOption | undefined {
  return categories
    .find((category) => category.id === categoryId)
    ?.options.find((option) => option.id === optionId);
}

export function matchPreset(selection: Selection): PresetId | "custom" {
  const matched = presets.find((preset) =>
    Object.entries(preset.picks).every(
      ([categoryId, optionId]) => selection[categoryId] === optionId,
    ),
  );
  return matched?.id ?? "custom";
}

export type LineItem = {
  categoryId: string;
  title: string;
  optionName: string;
  ratePerSqft: number;
  total: number;
};

export type QuantityItem = {
  id: "cement" | "steel" | "masonry" | "sand" | "aggregate";
  label: string;
  amount: number;
  unit: string;
};

export type Estimate = {
  area: number;
  floors: number;
  floorFactor: number;
  perSqft: number;
  materialsPerSqft: number;
  labourPerSqft: number;
  total: number;
  low: number;
  high: number;
  lines: LineItem[];
  quantities: QuantityItem[];
};

export function calculateEstimate(
  area: number,
  floors: number,
  selection: Selection,
): Estimate {
  const safeArea = Math.max(100, Math.min(20000, Math.round(area) || 0));
  const safeFloors = Math.max(1, Math.min(5, floors));
  const floorFactor = 1 + (safeFloors - 1) * 0.035;

  const lines: LineItem[] = categories.map((category) => {
    const option =
      getOption(category.id, selection[category.id]) ?? category.options[0];
    const rate = option.ratePerSqft * floorFactor;
    return {
      categoryId: category.id,
      title: category.title,
      optionName: option.name,
      ratePerSqft: rate,
      total: Math.round(rate * safeArea),
    };
  });

  const total = lines.reduce((sum, line) => sum + line.total, 0);
  const perSqft = safeArea > 0 ? total / safeArea : 0;
  const labourLine = lines.find((line) => line.categoryId === "labour");
  const labourPerSqft = labourLine?.ratePerSqft ?? 0;
  const materialsPerSqft = perSqft - labourPerSqft;

  const masonry = getOption("masonry", selection.masonry);
  const cement = getOption("cement", selection.cement);
  const steel = getOption("steel", selection.steel);

  const quantities: QuantityItem[] = [
    {
      id: "cement",
      label: cement?.name ?? "Cement",
      amount: Math.round(safeArea * (cement?.qtyPerSqft ?? 0.4)),
      unit: "bags",
    },
    {
      id: "steel",
      label: steel?.name ?? "TMT steel",
      amount: Math.round(safeArea * (steel?.qtyPerSqft ?? 4)),
      unit: "kg",
    },
    {
      id: "masonry",
      label: masonry?.name ?? "Masonry",
      amount: Math.round(safeArea * (masonry?.qtyPerSqft ?? 8)),
      unit: masonry?.qtyUnit ?? "units",
    },
    {
      id: "sand",
      label: "River / M-sand",
      amount: Math.round(safeArea * 0.81),
      unit: "cft",
    },
    {
      id: "aggregate",
      label: "Coarse aggregate",
      amount: Math.round(safeArea * 0.92),
      unit: "cft",
    },
  ];

  return {
    area: safeArea,
    floors: safeFloors,
    floorFactor,
    perSqft,
    materialsPerSqft,
    labourPerSqft,
    total,
    low: Math.round(total * 0.9),
    high: Math.round(total * 1.12),
    lines,
    quantities,
  };
}

export function formatInr(value: number, compact = false): string {
  if (compact && value >= 10_000_000) {
    return `₹${(value / 10_000_000).toFixed(2)} Cr`;
  }
  if (compact && value >= 100_000) {
    return `₹${(value / 100_000).toFixed(2)} L`;
  }
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

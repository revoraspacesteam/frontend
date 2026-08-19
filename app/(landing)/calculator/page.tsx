import { HouseCostCalculator } from "@/components/calculator/HouseCostCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Cost Calculator | REVORA SPACES",
  description:
    "Estimate the cost of building a house by built-up area and material selection. Pick structure, flooring, fittings, and labour to see an approximate budget.",
};

export default function CalculatorPage() {
  return <HouseCostCalculator />;
}

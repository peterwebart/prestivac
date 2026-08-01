import {
 Droplets,
 Filter,
 Flame,
 HardHat,
 ShieldAlert,
 Sparkles,
 Timer,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const foodBeverageGuide: IndustryGuideData = {
 slug: "food-beverage",
 name: "Food & Beverage",
 titleAccent: "food & beverage manufacturing",
 seo: {
 title: "Food & Beverage Vacuum Solutions",
 description:
 "Industrial vacuum solutions for food and beverage manufacturing: explosion-proof, HEPA-filtered, sanitation-compatible recovery for flour, sugar, starch and ingredient dusts under NFPA 61 / 660.",
 },
 heroIntro:
 "The ingredients are familiar; the dusts are not benign. Flour, sugar, starch and cocoa are classic combustible dusts — the material family behind the disaster that reshaped OSHA enforcement — and they're handled in plants where sanitation, allergen control and wet floors add rules of their own.",
 heroImage: {
 src: "/images/library/workers/sugar-plant-cleanup.jpg",
 alt: "Operator vacuuming spilled sugar in a food-grade processing area",
 },
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "99.99% at 0.3 µm — hygiene and exposure control" },
 { icon: Sparkles, title: "Sanitation-Compatible", detail: "Stainless, wash-down-tolerant construction" },
 { icon: Droplets, title: "Wet & Dry Capability", detail: "Powder, wash-down water and spills in one tool set" },
 ],
 stagesIntro:
 "Ingredient dust escapes from the silo to the sealed bag — each stage below is a generation point with its own recovery requirement.",
 stages: [
 { label: "Receiving & bulk storage", detail: "Pit dumps and silo transfers liberate ingredient dust at intake — the first generation point and the first sealed-disposal habit." },
 { label: "Milling & grinding", detail: "The finest fractions on site are made here — the heaviest explosion-proof recovery duty in the plant." },
 { label: "Sifting & conveying", detail: "Every transfer point puffs; elevated surfaces above the conveying runs load steadily between cleanings." },
 { label: "Mixing & blending", detail: "Charging flour, sugar and starch peaks airborne concentration — capture at the mixer, grounded end to end." },
 { label: "Baking & thermal processing", detail: "Flour dust near ovens is fuel settling next to sustained heat — oven perimeters earn their own frequency." },
 { label: "Coating & seasoning", detail: "Powder application zones need capture at the source, with allergen-aware changeover cleaning on the record." },
 { label: "Packaging", detail: "Residual fines vibrate free along the lines; scheduled vacuum passes protect product and compliance together." },
 { label: "Warehouse & dispatch", detail: "Spill response and rack cleaning with sealed recovery — a torn bag never becomes an airborne event." },
 ],
 challengesHeading: "Familiar ingredients, industrial hazards",
 challenges: [
 { icon: Flame, title: "Combustible ingredient dusts", detail: "Flour, sugar, starch and cocoa are classic combustible dusts under NFPA 61 — the 2008 sugar refinery disaster is why OSHA's Combustible Dust NEP was reissued." },
 { icon: ShieldAlert, title: "Sanitation is not a dust program", detail: "Food-safety cleaning is frequent but reaches elevated surfaces last — exactly where secondary-explosion fuel accumulates." },
 { icon: Sparkles, title: "Product hygiene", detail: "Recovery equipment works food-adjacent: stainless, wash-down-tolerant construction that the sanitation regime can accept." },
 { icon: HardHat, title: "Allergen changeover", detail: "Flour, milk powder and other allergen dusts make carryover a recall-class risk — capture at source with cleanable, documented equipment." },
 { icon: Droplets, title: "Wet and dry in one shift", detail: "Floors alternate between dry powder, wash-down water and sugary spills — the tool set has to handle both states." },
 { icon: Timer, title: "Exposure during cleaning", detail: "Flour dust is a recognized respiratory sensitizer; blowdown and sweeping put it airborne at breathing height." },
 ],
 materialsHeading: "Understand the ingredients. Match the recovery.",
 materials: [
 { name: "Flour", combustible: "Yes — a classic combustible dust", approach: "Explosion-proof HEPA recovery; elevated surfaces on a defined frequency", href: "/materials/flour-dust" },
 { name: "Sugar & powdered sugar", combustible: "Yes — historically catastrophic", approach: "Explosion-proof recovery with grounded accessories", href: "/materials/sugar-dust" },
 { name: "Corn & other starches", combustible: "Yes", approach: "Explosion-proof recovery; sealed disposal", href: "/materials/corn-dust" },
 { name: "Cocoa & chocolate powder", combustible: "Yes", approach: "HEPA-filtered explosion-proof recovery", href: "/materials/cocoa-dust" },
 { name: "Coffee dust & chaff", combustible: "Yes", approach: "Roaster-surround chaff on schedule; HEPA recovery at grinders", href: "/materials/coffee-dust" },
 { name: "Milk & whey powder", combustible: "Yes — and an allergen", approach: "HEPA recovery with documented changeover cleaning" },
 { name: "Spice & seasoning dusts", combustible: "Generally yes — verify by testing", approach: "HEPA-filtered recovery; exposure and hygiene drive the spec" },
 ],
 materialsDirectory: { label: "food dusts", href: "/materials#food-dusts" },
 applicationsHeading: "Applications in food & beverage",
 applicationCategorySlug: "food-processing",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "wet-dry-systems", "central-vacuum-systems"],
 studySlug: "flour-dust-commercial-bakery",
};

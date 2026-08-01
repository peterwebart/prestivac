/**
 * Real PrestiVac model lineup from client-supplied product photography.
 * Model names are reproduced verbatim from the client's files; configuration
 * suffixes (RCT, MR, IS, TT) are displayed as-is and deliberately not
 * glossed — definitions and full specifications come from factory
 * datasheets. CLIENT TO SUPPLY: per-model spec sheets.
 */
export type ProductModel = { name: string; image: string; tags: string[] };

export type ModelSeries = {
 id: string;
 name: string;
 blurb: string;
 categoryHref: string;
 models: ProductModel[];
};

export const MODEL_LINEUP: ModelSeries[] = [
 {
 id: "avx",
 name: "AVX Series",
 blurb: "Air-operated explosion-proof vacuums — zero electrical components anywhere on the unit.",
 categoryHref: "/products/pneumatic-vacuums",
 models: [
 { name: "AVX-5 EX", image: "/images/products/models/avx-5-ex.jpg", tags: ["EX"] },
 { name: "AVX-5-10 EX HEPA", image: "/images/products/models/avx-5-10-ex-hepa.jpg", tags: ["EX", "HEPA"] },
 { name: "AVX-5-10 EX MR HEPA", image: "/images/products/models/avx-5-10-ex-mr-hepa.jpg", tags: ["EX", "HEPA", "MR"] },
 { name: "AVX-15 EX HEPA", image: "/images/products/models/avx-15-ex-hepa.jpg", tags: ["EX", "HEPA"] },
 { name: "AVX-15 EX MR HEPA", image: "/images/products/models/avx-15-ex-mr-hepa.jpg", tags: ["EX", "HEPA", "MR"] },
 { name: "AVX-15 EX RCT", image: "/images/products/models/avx-15-ex-rct.jpg", tags: ["EX", "RCT"] },
 { name: "AVX-15 EX RCT HEPA", image: "/images/products/models/avx-15-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "AVX-20 EX RCT", image: "/images/products/models/avx-20-ex-rct.jpg", tags: ["EX", "RCT"] },
 { name: "AVX-20 EX RCT HEPA", image: "/images/products/models/avx-20-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "AVX-25 EX RCT HEPA", image: "/images/products/models/avx-25-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "AVX-25 EX RCT IS HEPA", image: "/images/products/models/avx-25-ex-rct-is-hepa.jpg", tags: ["EX", "HEPA", "RCT", "IS"] },
 { name: "AVX-55 EX", image: "/images/products/models/avx-55-ex.jpg", tags: ["EX"] },
 ],
 },
 {
 id: "evx",
 name: "EVX Series",
 blurb: "Electric explosion-proof vacuums with HEPA filtration options.",
 categoryHref: "/products/explosion-proof-vacuums",
 models: [
 { name: "EVX-5 EX RCT IS HEPA", image: "/images/products/models/evx-5-ex-rct-is-hepa.jpg", tags: ["EX", "HEPA", "RCT", "IS"] },
 { name: "EVX-5-10 EX HEPA", image: "/images/products/models/evx-5-10-ex-hepa.jpg", tags: ["EX", "HEPA"] },
 { name: "EVX-5-10 EX MR HEPA", image: "/images/products/models/evx-5-10-ex-mr-hepa.jpg", tags: ["EX", "HEPA", "MR"] },
 { name: "EVX-10 EX", image: "/images/products/models/evx-10-ex.jpg", tags: ["EX"] },
 { name: "EVX-10 EX RCT HEPA", image: "/images/products/models/evx-10-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "EVX-15 EX", image: "/images/products/models/evx-15-ex.jpg", tags: ["EX"] },
 { name: "EVX-15 EX HEPA", image: "/images/products/models/evx-15-ex-hepa.jpg", tags: ["EX", "HEPA"] },
 { name: "EVX-15 EX MR HEPA", image: "/images/products/models/evx-15-ex-mr-hepa.jpg", tags: ["EX", "HEPA", "MR"] },
 { name: "EVX-20 EX RCT HEPA", image: "/images/products/models/evx-20-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "EVX-25 EX RCT HEPA", image: "/images/products/models/evx-25-ex-rct-hepa.jpg", tags: ["EX", "HEPA", "RCT"] },
 { name: "EVX-55", image: "/images/products/models/evx-55.jpg", tags: [] },
 ],
 },
 {
 id: "ex1",
 name: "EX1 Series",
 blurb: "HEPA-filtered industrial line — UL 1203 Certified for Class I & Class II hazardous locations (UL 1203).",
 categoryHref: "/products/hepa-vacuums",
 models: [
 { name: "EX1-5 RCT IS HEPA", image: "/images/products/models/ex1-5-rct-is-hepa.jpg", tags: ["HEPA", "RCT", "IS"] },
 { name: "EX1-5-10 MR HEPA", image: "/images/products/models/ex1-5-10-mr-hepa.jpg", tags: ["HEPA", "MR"] },
 { name: "EX1-10 HEPA", image: "/images/products/models/ex1-10-hepa.jpg", tags: ["HEPA"] },
 { name: "EX1-15 HEPA", image: "/images/products/models/ex1-15-hepa.jpg", tags: ["HEPA"] },
 { name: "EX1-15 MR HEPA", image: "/images/products/models/ex1-15-mr-hepa.jpg", tags: ["HEPA", "MR"] },
 { name: "EX1-15 RCT", image: "/images/products/models/ex1-15-rct.jpg", tags: ["RCT"] },
 { name: "EX1-15 RCT HEPA", image: "/images/products/models/ex1-15-rct-hepa.jpg", tags: ["HEPA", "RCT"] },
 { name: "EX1-20 RCT HEPA", image: "/images/products/models/ex1-20-rct-hepa.jpg", tags: ["HEPA", "RCT"] },
 { name: "EX1-25 RCT HEPA", image: "/images/products/models/ex1-25-rct-hepa.jpg", tags: ["HEPA", "RCT"] },
 { name: "EX1-55", image: "/images/products/models/ex1-55.jpg", tags: [] },
 ],
 },
 {
 id: "av-ev",
 name: "AV & EV Series",
 blurb: "Compact industrial vacuum units.",
 categoryHref: "/products/industrial-vacuums",
 models: [
 { name: "AV1", image: "/images/products/models/av1.jpg", tags: [] },
 { name: "AV1 TT", image: "/images/products/models/av1-tt.jpg", tags: ["TT"] },
 { name: "EV1", image: "/images/products/models/ev1.jpg", tags: [] },
 { name: "EV1 TT", image: "/images/products/models/ev1-tt.jpg", tags: ["TT"] },
 ],
 },
 {
 id: "accessories",
 name: "Accessories & Kits",
 blurb: "Hoses, tools and service kits for the PrestiVac lineup.",
 categoryHref: "/products/accessories",
 models: [
 { name: "1.25 in accessory kit", image: "/images/products/models/1-25-in-accessory-kit.jpg", tags: [] },
 { name: "1.5 in accessory kit", image: "/images/products/models/1-5-in-accessory-kit.jpg", tags: [] },
 { name: "1.5 in suction kit", image: "/images/products/models/1-5-in-suction-kit.jpg", tags: [] },
 { name: "AV air hose", image: "/images/products/models/av-air-hose.jpg", tags: [] },
 { name: "Tool set", image: "/images/products/models/tool-set.jpg", tags: [] },
 { name: "VACOMEGAH kit", image: "/images/products/models/vacomegah-kit.jpg", tags: [] },
 { name: "VACOSE110 kit", image: "/images/products/models/vacose110-kit.jpg", tags: [] },
 ],
 },
];

/** Stable per-model slug derived from the (unique) product image filename. */
export function modelSlug(model: ProductModel): string {
 return model.image.split("/").pop()!.replace(/\.jpg$/, "");
}

export type FlatModel = ProductModel & {
 slug: string;
 seriesId: string;
 seriesName: string;
 seriesBlurb: string;
 categoryHref: string;
 /** Only the EX1 line falls under UL 1203 certification (Ex 1-xx HEPA scope). */
 csaCertified: boolean;
};

export const ALL_MODELS: FlatModel[] = MODEL_LINEUP.flatMap((series) =>
 series.models.map((model) => ({
 ...model,
 slug: modelSlug(model),
 seriesId: series.id,
 seriesName: series.name,
 seriesBlurb: series.blurb,
 categoryHref: series.categoryHref,
 csaCertified: ["ex1", "evx", "avx"].includes(series.id),
 })),
);

export function findModelBySlug(slug: string): FlatModel | undefined {
 return ALL_MODELS.find((m) => m.slug === slug);
}

export function seriesModels(seriesId: string): FlatModel[] {
 return ALL_MODELS.filter((m) => m.seriesId === seriesId);
}

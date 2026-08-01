/**
 * Case Study Library
 *
 * Every entry is a "Representative Industry Case Study": a realistic,
 * educational engineering scenario — NOT a verified customer engagement.
 * Per the content brief: no customer names, no fabricated quotes, no
 * invented financial or performance metrics, and no real manufacturer
 * brand names (even "inspired by" naming implies association). Facilities
 * are described generically ("a major North American automotive
 * manufacturer"). Quantified claims are limited to published, defensible
 * reference points (e.g., OSHA's 1/32 in. layer guidance, HEPA 99.99%).
 */

export type CaseStudyTaxonomy = {
 industry: string;
 application: string;
 hazard: string;
 material: string;
 process: string;
 dustClass: string;
 facilityType: string;
 standards: string[];
 products: string[];
 personas: string[];
 cluster: string[];
};

export type CaseStudy = {
 slug: string;
 title: string;
 subtitle: string;
 date: string;
 readingTime: number;
 heroImage?: { src: string; alt: string };
 hero: {
 industry: string;
 hazard: string;
 material: string;
 standards: string[];
 };
 executiveSummary: string[];
 projectOverview: { label: string; value: string }[];
 industryBackground: string[];
 challenge: { area: string; detail: string }[];
 hazardAnalysis: string[];
 pentagon: { element: string; presence: string }[];
 siteAssessment: string[];
 solution: string[];
 equipment: { item: string; purpose: string }[];
 implementation: { phase: string; detail: string }[];
 beforeAfter: { aspect: string; before: string; after: string }[];
 compliance: string[];
 operationalImprovements: string[];
 technical: string[];
 faqs: { question: string; answer: string }[];
 relatedIndustries: { label: string; href: string }[];
 relatedProducts: string[];
 takeaways: string[];
 taxonomy: CaseStudyTaxonomy;
 seo: {
 metaTitle: string;
 metaDescription: string;
 keywords: string[];
 };
};

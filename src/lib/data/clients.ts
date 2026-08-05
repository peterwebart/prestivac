export type ClientLogo = {
 file: string;
 /** Brand name. Empty where PrestiVac has not yet confirmed the mapping —
 * alt text falls back to a generic description rather than guessing. */
 name: string;
};

/** Client logos supplied by PrestiVac. */
export const CLIENT_LOGOS: ClientLogo[] = [
 { file: "client-01.png", name: "ADM" },
 { file: "client-02.png", name: "Agropur" },
 { file: "client-03.png", name: "Ball" },
 { file: "client-04.png", name: "Bemis" },
 { file: "client-05.png", name: "Benjamin Moore" },
 { file: "client-06.png", name: "Bridgestone" },
 { file: "client-07.png", name: "" },
 { file: "client-08.png", name: "Cargill" },
 { file: "client-09.png", name: "Collins Aerospace" },
 { file: "client-10.png", name: "Daimler" },
 { file: "client-11.png", name: "Duke Energy" },
 { file: "client-12.png", name: "DuPont" },
 { file: "client-13.png", name: "Meta" },
 { file: "client-14.png", name: "Florida State University" },
 { file: "client-15.png", name: "Fujifilm" },
 { file: "client-16.png", name: "Georgia-Pacific" },
 { file: "client-17.png", name: "Goodrich" },
 { file: "client-18.png", name: "Google" },
 { file: "client-19.png", name: "Honeywell" },
 { file: "client-20.png", name: "HP" },
 { file: "client-21.png", name: "John Deere" },
 { file: "client-22.png", name: "Kellogg's" },
 { file: "client-23.png", name: "Letterkenny Army Depot" },
 { file: "client-24.png", name: "Lockheed Martin" },
 { file: "client-25.png", name: "LMI Aerospace" },
 { file: "client-26.png", name: "Lubrizol" },
 { file: "client-27.png", name: "Michelin" },
 { file: "client-28.png", name: "Microsoft" },
 { file: "client-29.png", name: "Nike" },
 { file: "client-30.png", name: "Alvogen" },
 { file: "client-31.png", name: "Norwich Pharma Services" },
 { file: "client-32.png", name: "Oak Ridge National Laboratory" },
 { file: "client-33.png", name: "VA Health Care" },
 { file: "client-34.png", name: "RJ Reynolds" },
 { file: "client-35.png", name: "Rolls-Royce" },
 { file: "client-37.png", name: "Tarkett" },
 { file: "client-38.png", name: "Tilray" },
 { file: "client-39.png", name: "Toyota" },
 { file: "client-40.png", name: "The University of Texas at Austin" },
 { file: "client-41.png", name: "UTC Aerospace Systems" },
 { file: "client-42.png", name: "Wesco" },
 { file: "client-43.png", name: "Zoetis" },
];

export type ClientIndustry = {
 industry: string;
 /** Industry page to link to, where one exists. */
 href?: string;
 /** Leading clients in this sector. */
 clients: string[];
};

/**
 * Clients grouped by industry, as supplied and confirmed by PrestiVac.
 * Names here are PrestiVac's own customer representations.
 */
export const CLIENT_INDUSTRIES: ClientIndustry[] = [
 {
 industry: "Aerospace & Defense",
 href: "/industries/aerospace",
 clients: ["Boeing", "Pratt & Whitney", "Lockheed Martin"],
 },
 {
 industry: "Automotive",
 href: "/industries/automotive",
 clients: ["Toyota", "Daimler", "Michelin"],
 },
 {
 industry: "Food & Beverage",
 href: "/industries/food-beverage",
 clients: ["Cargill", "Kellogg's", "ADM"],
 },
 {
 industry: "Pharmaceutical",
 href: "/industries/pharmaceutical",
 clients: ["Zoetis", "Alvogen", "Norwich Pharma Services"],
 },
 {
 industry: "Electronics & Technology",
 href: "/industries/electronics",
 clients: ["Google", "Microsoft", "HP"],
 },
 {
 industry: "Chemical Processing",
 href: "/industries/chemical",
 clients: ["DuPont", "Lubrizol", "Honeywell"],
 },
 {
 industry: "Paper & Packaging",
 href: "/industries/paper-packaging",
 clients: ["Georgia-Pacific", "Ball", "Bemis"],
 },
 {
 industry: "Energy",
 href: "/industries/energy",
 clients: ["Duke Energy"],
 },
 {
 industry: "Government & Research",
 clients: ["Oak Ridge National Laboratory", "Letterkenny Army Depot", "VA Health Care"],
 },
];

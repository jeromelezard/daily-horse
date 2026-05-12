export type Location = {
    name: string;
    lat: number;
    lng: number;
    // If true, any guess is treated as a perfect 100 for this round.
    anywhere?: boolean;
};

export const LOCATIONS: Location[] = [
    { name: "Day 1", lat: 51.5074, lng: -0.1278 }, // London
    { name: "Day 2", lat: 37.7625, lng: -25.3375 }, // Furnas Lake, São Miguel, Azores
    { name: "Day 3", lat: 51.2562, lng: -0.3115 }, // Box Hill, Surrey, England
    { name: "Day 4", lat: 29.563, lng: 106.5516 }, // Chongqing
    { name: "Day 5", lat: 10.4127664431284, lng: 119.1770777147206 }, // Port Barton, Palawan, Philippines
];

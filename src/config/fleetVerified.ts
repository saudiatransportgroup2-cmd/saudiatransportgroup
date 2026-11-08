/**
 * Verified vehicle data. Leave empty until real figures are confirmed.
 *
 * Pages only show seat counts, luggage capacity or vehicle models for entries that
 * exist here. Nothing is invented. Example entry:
 *   { name: "Coach A", seats: 49, luggage: "Under-floor hold", notes: "Confirmed with operator" }
 */
export interface VerifiedVehicle {
  name: string;
  category: "minibus" | "midsize-bus" | "coach";
  seats: number;
  luggage?: string;
  notes?: string;
}

export const verifiedCoaches: VerifiedVehicle[] = [];

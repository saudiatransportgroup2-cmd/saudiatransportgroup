/**
 * Image slots for the eight service pages.
 *
 * Every slot ships as a designed placeholder. To use a real photograph, copy the
 * file into /public/images/services/ and set `src` (for example
 * "/images/services/airport-hero.jpg"). Nothing else needs to change: `alt` and
 * `brief` are already written for each slot.
 */
export interface ImageSlot {
  src: string | null;
  alt: string;
  /** Art-direction note for whoever supplies the photograph. */
  brief: string;
}

const slot = (alt: string, brief: string): ImageSlot => ({ src: null, alt, brief });

export const images = {
  // Airport transfers
  "airport-hero": slot("Private chauffeur-driven car waiting outside an airport arrivals hall", "Wide 16:9 dusk shot: dark sedan or SUV at the arrivals kerb, driver standing beside it. Keep room on the left for the headline."),
  "airport-family": slot("Family loading luggage into a private vehicle at the airport", "4:3, family with suitcases at a vehicle boot, natural light."),
  "airport-business": slot("Business traveller being greeted by a chauffeur at arrivals", "4:5 portrait, executive with carry-on, driver holding the door."),
  "airport-umrah": slot("Pilgrims in ihram clothing arriving by private transfer", "4:3, respectful, faces not required; luggage and vehicle."),
  // City tours
  "tours-hero-main": slot("Skyline of a Saudi city seen from a private vehicle", "3:4 tall hero image, city skyline at golden hour."),
  "tours-hero-a": slot("Historic district street in Saudi Arabia", "1:1 detail shot of heritage architecture."),
  "tours-hero-b": slot("Interior of a premium vehicle on a city road", "4:3 interior from the rear seat."),
  "tours-hero-c": slot("Modern city plaza at evening", "4:3 contemporary architecture."),
  "tours-riyadh": slot("Riyadh skyline with towers at dusk", "Full-bleed 16:9 Riyadh skyline."),
  "tours-jeddah": slot("Jeddah waterfront promenade", "3:2 Corniche or waterfront."),
  "tours-makkah": slot("Makkah city view in soft morning light", "4:5, respectful wide view; no close-ups of worshippers."),
  "tours-madinah": slot("Madinah city view with date palms", "4:5, respectful wide view."),
  "tours-east": slot("Eastern Province waterfront at Al Khobar", "21:9 wide waterfront strip."),
  // Umrah
  "umrah-hero": slot("Calm early-morning view toward Makkah", "Arch-cropped portrait 3:4, soft light, respectful."),
  "umrah-family": slot("Family of pilgrims travelling together in a spacious vehicle", "4:3 warm interior."),
  "umrah-madinah": slot("Madinah at dawn with palms", "3:2 serene scene."),
  // Events
  "events-hero": slot("Dark vehicles lined up outside an evening event venue", "16:9 evening, venue lights, a row of vehicles."),
  "events-wedding": slot("Wedding guests arriving by private vehicles", "4:3 elegant wedding arrival."),
  "events-conference": slot("Delegates boarding a vehicle outside a conference centre", "4:3 corporate arrival."),
  // Coaches
  "coach-hero": slot("Large private coach parked on a wide road", "21:9 low-angle coach, clean side-on view."),
  "coach-interior": slot("Interior of a passenger coach", "4:3 aisle view, seats."),
  "coach-small": slot("Smaller passenger bus on a city street", "4:3 three-quarter view."),
  // Groups
  "groups-hero": slot("Group of travellers with luggage meeting their vehicles", "3:2 group at the kerb with several vehicles."),
  "groups-family": slot("Extended family boarding a passenger van", "4:3."),
  // Intercity
  "intercity-hero": slot("Open highway through the Saudi landscape at sunrise", "21:9 cinematic highway shot."),
  "intercity-suv": slot("SUV driving on a desert highway", "4:3 rolling shot."),
  "intercity-sedan": slot("Executive sedan on a motorway", "4:3 rolling shot."),
  // Chauffeur
  "chauffeur-hero": slot("Chauffeur opening the rear door of a dark luxury sedan", "3:4 portrait, night or dusk, dark navy tones."),
  "chauffeur-interior": slot("Rear seat of a luxury sedan", "4:3 interior detail."),
  "chauffeur-suv": slot("Premium SUV at a hotel entrance", "4:3."),
} satisfies Record<string, ImageSlot>;

export type ImageId = keyof typeof images;

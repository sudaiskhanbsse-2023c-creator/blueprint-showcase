import heroImg from "@/assets/hero-mountains.jpg";
import madinahImg from "@/assets/madinah.jpg";
import umrahHero from "@/assets/umrah-hero.jpg";
import hunzaImg from "@/assets/tour-hunza.jpg";
import dubaiImg from "@/assets/tour-dubai.jpg";
import turkeyImg from "@/assets/tour-turkey.jpg";
import malaysiaImg from "@/assets/tour-malaysia.jpg";
import bakuImg from "@/assets/tour-baku.jpg";
import thailandImg from "@/assets/tour-thailand.jpg";
import skarduImg from "@/assets/tour-skardu.jpg";
import blogHero from "@/assets/blog-hero.jpg";
import logoImg from "@/assets/travelex-logo.png";

export { heroImg, madinahImg, umrahHero, blogHero, logoImg };

export const WHATSAPP = "03250501140";
export const WHATSAPP_INTL = "923250501140";
export const EMAIL = "sudais.khan.bsse-2023c@cecosian.edu.pk";
export const INSTAGRAM = "_sudaisk";
export const WA_LINK = `https://wa.me/${WHATSAPP_INTL}`;

export type Tour = {
  id: string; title: string; location: string; image: string; price: string;
  duration: string; group: string; highlights: string[]; description: string;
  itinerary: { day: string; title: string }[];
};

export const tours: Tour[] = [
  { id: "hunza", title: "Hunza & Naran Valley", location: "Northern Pakistan", image: hunzaImg, price: "PKR 45,000", duration: "6 Days / 5 Nights", group: "Up to 12 pax",
    highlights: ["Attabad Lake boating", "Khunjerab Pass visit", "Karimabad heritage walk", "4x4 jeep safaris", "All meals included"],
    description: "Experience the breathtaking beauty of Pakistan's north — turquoise lakes, snow-capped peaks, and ancient Silk Road heritage.",
    itinerary: [{ day: "Day 1", title: "Islamabad → Naran" }, { day: "Day 2", title: "Naran → Lulusar Lake → Chilas" }, { day: "Day 3", title: "Chilas → Hunza via KKH" }, { day: "Day 4", title: "Attabad Lake & Passu Cones" }, { day: "Day 5", title: "Khunjerab Pass" }, { day: "Day 6", title: "Return to Islamabad" }] },
  { id: "skardu", title: "Skardu & Shangrila", location: "Gilgit-Baltistan", image: skarduImg, price: "PKR 65,000", duration: "7 Days / 6 Nights", group: "Up to 10 pax",
    highlights: ["Shangrila Resort stay", "Sheosar Lake", "Deosai National Park", "Cold Desert experience", "3 meals daily"],
    description: "Skardu, 'Heaven on Earth' — explore deep blue lakes, surreal cold deserts, and the gateway to K2.",
    itinerary: [{ day: "Day 1", title: "Fly Islamabad → Skardu" }, { day: "Day 2", title: "Shangrila Resort" }, { day: "Day 3", title: "Deosai Plains" }, { day: "Day 4", title: "Cold Desert & Shigar Fort" }, { day: "Day 5", title: "Khaplu Valley" }, { day: "Day 6", title: "Manthokha Waterfall" }, { day: "Day 7", title: "Fly back" }] },
  { id: "dubai", title: "Dubai Luxury Escape", location: "United Arab Emirates", image: dubaiImg, price: "PKR 185,000", duration: "5 Days / 4 Nights", group: "Couples & Families",
    highlights: ["Burj Khalifa 124th floor", "Desert safari with BBQ", "Marina dhow cruise", "Visa & flights included", "4-star hotel"],
    description: "From the world's tallest tower to golden desert dunes — premium Dubai with everything handled.",
    itinerary: [{ day: "Day 1", title: "Arrival & Marina walk" }, { day: "Day 2", title: "Burj Khalifa & Dubai Mall" }, { day: "Day 3", title: "Desert Safari" }, { day: "Day 4", title: "Abu Dhabi day tour" }, { day: "Day 5", title: "Shopping & departure" }] },
  { id: "turkey", title: "Istanbul & Cappadocia", location: "Turkey", image: turkeyImg, price: "PKR 245,000", duration: "8 Days / 7 Nights", group: "Up to 20 pax",
    highlights: ["Hagia Sophia & Blue Mosque", "Hot air balloon ride", "Bosphorus cruise", "Grand Bazaar", "Halal meals"],
    description: "Walk through empires in Istanbul and float over fairy chimneys in Cappadocia.",
    itinerary: [{ day: "Day 1-2", title: "Istanbul Old City" }, { day: "Day 3", title: "Grand Bazaar & Topkapi" }, { day: "Day 4", title: "Fly to Cappadocia" }, { day: "Day 5", title: "Hot air balloon" }, { day: "Day 6", title: "Goreme museum" }, { day: "Day 7-8", title: "Return via Istanbul" }] },
  { id: "malaysia", title: "Malaysia Family Tour", location: "Kuala Lumpur & Langkawi", image: malaysiaImg, price: "PKR 165,000", duration: "7 Days / 6 Nights", group: "Family of 4",
    highlights: ["Petronas Twin Towers", "Langkawi island hopping", "Genting Highlands", "Cable car rides", "Visa assistance"],
    description: "Tropical beaches, vibrant cities, and family-friendly attractions.",
    itinerary: [{ day: "Day 1", title: "Arrive KL" }, { day: "Day 2", title: "Petronas Towers" }, { day: "Day 3", title: "Genting Highlands" }, { day: "Day 4", title: "Fly to Langkawi" }, { day: "Day 5", title: "Island hopping" }, { day: "Day 6", title: "Beach & shopping" }, { day: "Day 7", title: "Return" }] },
  { id: "baku", title: "Baku Discovery", location: "Azerbaijan", image: bakuImg, price: "PKR 195,000", duration: "6 Days / 5 Nights", group: "Up to 15 pax",
    highlights: ["Flame Towers light show", "Old City heritage", "Mud volcanoes", "Caspian Sea promenade", "Visa on arrival"],
    description: "Land of fire — futuristic skylines, ancient walled cities, Caspian beauty.",
    itinerary: [{ day: "Day 1", title: "Arrival & dinner" }, { day: "Day 2", title: "Old City & Maiden Tower" }, { day: "Day 3", title: "Gobustan volcanoes" }, { day: "Day 4", title: "Gabala mountains" }, { day: "Day 5", title: "Flame Towers" }, { day: "Day 6", title: "Departure" }] },
  { id: "thailand", title: "Thailand Beach Paradise", location: "Phuket & Bangkok", image: thailandImg, price: "PKR 175,000", duration: "7 Days / 6 Nights", group: "Couples & Friends",
    highlights: ["Phi Phi island tour", "Bangkok city tour", "Floating markets", "Thai spa", "Halal restaurants"],
    description: "Crystal beaches, vibrant nightlife, ancient temples.",
    itinerary: [{ day: "Day 1-2", title: "Bangkok: Grand Palace" }, { day: "Day 3", title: "Fly to Phuket" }, { day: "Day 4", title: "Phi Phi islands" }, { day: "Day 5", title: "James Bond island" }, { day: "Day 6", title: "Beach & spa" }, { day: "Day 7", title: "Return" }] },
];

export type UmrahPackage = {
  id: string; name: string; tier: string; price: string; duration: string;
  hotels: { makkah: string; madinah: string };
  inclusions: string[]; itinerary: { day: string; title: string }[];
  description: string; image: string; badge?: string;
};

export const umrahPackages: UmrahPackage[] = [
  { id: "economy", name: "Economy", tier: "Essential Journey", price: "PKR 285,000", duration: "14 Days / 13 Nights",
    hotels: { makkah: "3-star, 800m from Haram", madinah: "3-star, 500m from Masjid Nabawi" },
    inclusions: ["Umrah visa & processing", "Return economy flights", "Shared quad room", "Daily breakfast", "Group transport", "Mu'allim support", "Ziyarat tours"],
    itinerary: [{ day: "Day 1", title: "Depart → Jeddah → Makkah" }, { day: "Day 2", title: "First Umrah" }, { day: "Day 3-6", title: "Ibadah in Haram" }, { day: "Day 7", title: "Ziyarat" }, { day: "Day 8", title: "Transfer to Madinah" }, { day: "Day 9-12", title: "Ibadah Masjid Nabawi" }, { day: "Day 13", title: "Madinah Ziyarat" }, { day: "Day 14", title: "Return" }],
    description: "Our most affordable Umrah package — perfect for first-time pilgrims and groups.", image: umrahHero },
  { id: "standard", name: "Standard", tier: "Comfort & Care", price: "PKR 425,000", duration: "14 Days / 13 Nights", badge: "Most Popular",
    hotels: { makkah: "4-star, 400m from Haram", madinah: "4-star, 200m from Masjid Nabawi" },
    inclusions: ["All Economy inclusions", "Double/triple sharing", "Breakfast & dinner buffet", "Private AC coach", "Dedicated mu'allim", "ZamZam 5L", "Welcome kit + Ihram"],
    itinerary: [{ day: "Day 1", title: "Private transfer to Makkah" }, { day: "Day 2", title: "First Umrah guided" }, { day: "Day 3-6", title: "Ibadah & duas" }, { day: "Day 7", title: "Full-day ziyarat" }, { day: "Day 8", title: "Comfort transfer" }, { day: "Day 9-12", title: "Riyadh-ul-Jannah" }, { day: "Day 13", title: "Madinah tour" }, { day: "Day 14", title: "Return" }],
    description: "Our most chosen package — ideal balance of comfort and value.", image: madinahImg },
  { id: "premium", name: "Premium", tier: "Royal Pilgrimage", price: "PKR 685,000", duration: "14 Days / 13 Nights",
    hotels: { makkah: "5-star Haram-view (Fairmont)", madinah: "5-star Masjid-view (Mövenpick)" },
    inclusions: ["All Standard inclusions", "Double room option", "Premium buffets", "Luxury Mercedes vans", "VIP airport meet", "Premium Ihram", "24/7 guide"],
    itinerary: [{ day: "Day 1", title: "VIP transfer" }, { day: "Day 2", title: "Private Umrah" }, { day: "Day 3-6", title: "Tahajjud + tafseer" }, { day: "Day 7", title: "Scholar-led ziyarat" }, { day: "Day 8", title: "Luxury transfer" }, { day: "Day 9-12", title: "Special access" }, { day: "Day 13", title: "Heritage tour" }, { day: "Day 14", title: "VIP return" }],
    description: "Finest hotels, dedicated guides, white-glove service.", image: umrahHero },
  { id: "vip", name: "VIP", tier: "Exclusive Suite", price: "PKR 1,250,000", duration: "14 Days / 13 Nights",
    hotels: { makkah: "Suite at Fairmont Clock Tower (Kaaba view)", madinah: "Suite at Mövenpick (Masjid view)" },
    inclusions: ["Business-class flights", "Private suite", "All gourmet meals", "Private chauffeur", "Personal scholar/guide", "VIP visa fast-track", "Spa & wellness access"],
    itinerary: [{ day: "Day 1", title: "Business-class departure" }, { day: "Day 2", title: "Private Umrah ceremony" }, { day: "Day 3-6", title: "Personalized ibadah" }, { day: "Day 7", title: "Private historical tour" }, { day: "Day 8", title: "Chauffeured transfer" }, { day: "Day 9-12", title: "Exclusive access" }, { day: "Day 13", title: "Private banquet" }, { day: "Day 14", title: "VIP return" }],
    description: "The ultimate sacred journey — no compromise, every detail crafted.", image: umrahHero },
];

export type Blog = {
  id: string; title: string; excerpt: string; date: string; readTime: string; content: string; category: string; image: string;
};

export const blogs: Blog[] = [
  { id: "umrah-guide", title: "Complete Umrah Guide for First-Timers", excerpt: "Everything you need to know before your sacred journey — from visa to Ihram, packing to rituals.",
    date: "May 2026", readTime: "8 min read", category: "Umrah Tips", image: umrahHero,
    content: "Performing Umrah for the first time is a deeply emotional experience. Begin with the intention (Niyyah) and prepare your Ihram before crossing the Miqat. Pack light: two white Ihram sheets for men, modest clothing for women, comfortable sandals, a small prayer mat. On arrival in Makkah, perform Tawaf around the Kaaba seven times, then Sa'i between Safa and Marwah. End with Halq or Taqsir. TravelEx assists with visa processing, hotel bookings near Haram, transport between Makkah and Madinah, and expert mu'allim guidance." },
  { id: "best-time-northern", title: "Best Time to Visit Northern Pakistan", excerpt: "Plan your trip to Hunza, Skardu, and Naran based on weather, scenery and crowd levels.",
    date: "April 2026", readTime: "5 min read", category: "Destinations", image: hunzaImg,
    content: "May to September is the prime window for Pakistan's north. April–May brings cherry blossoms to Hunza. June–August offers warmest weather and full access to Khunjerab Pass and Deosai Plains. September–October paints valleys gold with autumn foliage. Winter is for adventurers only. Book 2 months in advance for peak season." },
  { id: "visa-tips", title: "10 Visa Tips for Pakistani Passport Holders", excerpt: "Boost your visa approval chances with these insider tips from our visa specialists.",
    date: "March 2026", readTime: "6 min read", category: "Visa Guide", image: dubaiImg,
    content: "1. Maintain healthy bank balance (last 6 months). 2. Show strong ties to Pakistan. 3. Book refundable flights/hotels. 4. Get travel insurance. 5. Write a clear cover letter. 6. Build passport history with UAE, Malaysia, Turkey first. 7. Apply 4 weeks early. 8. Provide consistent information. 9. Use bank-stamped statements. 10. Use a trusted agency like TravelEx." },
  { id: "dubai-budget", title: "How to Do Dubai on a Budget", excerpt: "Yes, Dubai can be affordable — here are our top money-saving tips.",
    date: "February 2026", readTime: "7 min read", category: "Travel Hacks", image: dubaiImg,
    content: "Stay in Deira or Bur Dubai for cheaper hotels. Use the metro instead of taxis. Visit free attractions like the Dubai Fountain, JBR beach, and the Gold Souk. Eat at Pakistani/Indian restaurants in Karama. Book desert safaris through group operators. Visit during off-season (May-August) for 40% lower prices." },
  { id: "turkey-itinerary", title: "Perfect 7-Day Turkey Itinerary", excerpt: "From Istanbul's mosques to Cappadocia's balloons — the ideal route.",
    date: "January 2026", readTime: "9 min read", category: "Destinations", image: turkeyImg,
    content: "Day 1-3: Istanbul — Sultanahmet, Hagia Sophia, Grand Bazaar, Bosphorus cruise. Day 4: Fly to Cappadocia. Day 5: Hot air balloon at sunrise, Goreme open-air museum. Day 6: Pamukkale day trip. Day 7: Return via Istanbul. Halal food everywhere, Pakistani communities in Istanbul make it feel like home." },
  { id: "malaysia-family", title: "Malaysia with Kids: Family Travel Guide", excerpt: "Why Malaysia is the perfect first international trip for Pakistani families.",
    date: "December 2025", readTime: "6 min read", category: "Family Travel", image: malaysiaImg,
    content: "Visa-free for Pakistanis (15 days). English widely spoken. Halal food everywhere. KL has Legoland, Aquaria, Sunway Lagoon. Langkawi has beaches, cable cars, and island hopping. Budget hotels start at PKR 5000/night. A 7-day family trip costs around PKR 165,000 per person all-inclusive." },
];

export const services = [
  { title: "Umrah Packages", desc: "Economy to VIP — visa, flights, hotels, ziyarat handled.", icon: "Compass" },
  { title: "International Tours", desc: "Turkey, Dubai, Malaysia, Baku, Thailand & 15+ destinations.", icon: "Plane" },
  { title: "Domestic Tours", desc: "Hunza, Naran, Skardu — Pakistan's breathtaking north.", icon: "MapPin" },
  { title: "Hotel Bookings", desc: "Best rates on hotels worldwide with verified partners.", icon: "Hotel" },
  { title: "Visa Assistance", desc: "Expert help for UAE, UK, Canada, Schengen and more.", icon: "FileCheck" },
  { title: "Flight Booking", desc: "IATA-certified ticketing for domestic & international routes.", icon: "Plane" },
  { title: "Travel Insurance", desc: "Comprehensive coverage for medical, baggage, and trip cancellation.", icon: "Shield" },
  { title: "Group Tours", desc: "Curated group experiences for families, friends, and corporates.", icon: "Users" },
  { title: "Car Rental", desc: "Reliable vehicles for local trips and long-distance journeys.", icon: "Car" },
];

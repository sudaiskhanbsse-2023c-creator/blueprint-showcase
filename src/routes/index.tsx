import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Plane, MapPin, Hotel, Car, FileCheck, Compass, Phone, Mail, Instagram,
  MessageCircle, Star, Shield, Award, Clock, Calendar, Users, ArrowRight,
  Sparkles, ChevronDown, Check, Plane as PlaneIcon, Utensils, BedDouble, Bus,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import madinahImg from "@/assets/madinah.jpg";
import hunzaImg from "@/assets/tour-hunza.jpg";
import dubaiImg from "@/assets/tour-dubai.jpg";
import turkeyImg from "@/assets/tour-turkey.jpg";
import malaysiaImg from "@/assets/tour-malaysia.jpg";
import bakuImg from "@/assets/tour-baku.jpg";
import thailandImg from "@/assets/tour-thailand.jpg";
import skarduImg from "@/assets/tour-skardu.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TravelEx Pakistan — Luxury Travel & Umrah Booking" },
      { name: "description", content: "10 years of trusted travel — Umrah packages, international tours, flights, hotels and visa assistance from Peshawar, Pakistan." },
    ],
  }),
});

const WHATSAPP = "03250501140";
const WHATSAPP_INTL = "923250501140";
const EMAIL = "sudais.khan.bsse-2023c@cecosian.edu.pk";
const INSTAGRAM = "_sudaisk";

type Tour = {
  id: string; title: string; location: string; image: string; price: string;
  duration: string; group: string; highlights: string[]; description: string;
  itinerary: { day: string; title: string }[];
};

const tours: Tour[] = [
  {
    id: "hunza", title: "Hunza & Naran Valley", location: "Northern Pakistan", image: hunzaImg,
    price: "PKR 45,000", duration: "6 Days / 5 Nights", group: "Up to 12 pax",
    highlights: ["Attabad Lake boating", "Khunjerab Pass visit", "Karimabad heritage walk", "4x4 jeep safaris", "All meals included"],
    description: "Experience the breathtaking beauty of Pakistan's north — turquoise lakes, snow-capped peaks, and ancient Silk Road heritage. Curated for families and adventure seekers.",
    itinerary: [
      { day: "Day 1", title: "Islamabad → Naran via Babusar route" },
      { day: "Day 2", title: "Naran → Lulusar Lake → Chilas" },
      { day: "Day 3", title: "Chilas → Hunza via Karakoram Highway" },
      { day: "Day 4", title: "Attabad Lake & Passu Cones" },
      { day: "Day 5", title: "Khunjerab Pass (China border)" },
      { day: "Day 6", title: "Return to Islamabad" },
    ],
  },
  {
    id: "skardu", title: "Skardu & Shangrila", location: "Gilgit-Baltistan", image: skarduImg,
    price: "PKR 65,000", duration: "7 Days / 6 Nights", group: "Up to 10 pax",
    highlights: ["Shangrila Resort stay", "Sheosar & Sheikh Badin lakes", "Deosai National Park", "Cold Desert experience", "3 meals daily"],
    description: "Skardu, often called 'Heaven on Earth' — explore deep blue lakes, surreal cold deserts, and the gateway to K2.",
    itinerary: [
      { day: "Day 1", title: "Fly Islamabad → Skardu" },
      { day: "Day 2", title: "Shangrila Resort & Lower Kachura" },
      { day: "Day 3", title: "Deosai Plains & Sheosar Lake" },
      { day: "Day 4", title: "Cold Desert & Shigar Fort" },
      { day: "Day 5", title: "Khaplu Valley day trip" },
      { day: "Day 6", title: "Manthokha Waterfall" },
      { day: "Day 7", title: "Fly back to Islamabad" },
    ],
  },
  {
    id: "dubai", title: "Dubai Luxury Escape", location: "United Arab Emirates", image: dubaiImg,
    price: "PKR 185,000", duration: "5 Days / 4 Nights", group: "Couples & Families",
    highlights: ["Burj Khalifa 124th floor", "Desert safari with BBQ", "Marina dhow cruise", "Visa & flights included", "4-star hotel stay"],
    description: "From the world's tallest tower to golden desert dunes — a premium Dubai experience with everything handled, from visa to airport pickup.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Dubai Marina walk" },
      { day: "Day 2", title: "Burj Khalifa & Dubai Mall" },
      { day: "Day 3", title: "Desert Safari & BBQ dinner" },
      { day: "Day 4", title: "Abu Dhabi day tour (optional)" },
      { day: "Day 5", title: "Shopping & departure" },
    ],
  },
  {
    id: "turkey", title: "Istanbul & Cappadocia", location: "Turkey", image: turkeyImg,
    price: "PKR 245,000", duration: "8 Days / 7 Nights", group: "Up to 20 pax",
    highlights: ["Hagia Sophia & Blue Mosque", "Hot air balloon ride", "Bosphorus dinner cruise", "Grand Bazaar tour", "Halal meals"],
    description: "Walk through empires in Istanbul and float over fairy chimneys in Cappadocia. A spiritually and culturally rich journey designed for Pakistani travelers.",
    itinerary: [
      { day: "Day 1-2", title: "Istanbul: Old City & Bosphorus" },
      { day: "Day 3", title: "Grand Bazaar & Topkapi Palace" },
      { day: "Day 4", title: "Fly to Cappadocia" },
      { day: "Day 5", title: "Hot air balloon at sunrise" },
      { day: "Day 6", title: "Goreme open-air museum" },
      { day: "Day 7-8", title: "Return via Istanbul" },
    ],
  },
  {
    id: "malaysia", title: "Malaysia Family Tour", location: "Kuala Lumpur & Langkawi", image: malaysiaImg,
    price: "PKR 165,000", duration: "7 Days / 6 Nights", group: "Family of 4",
    highlights: ["Petronas Twin Towers", "Langkawi island hopping", "Genting Highlands", "Cable car rides", "Visa assistance"],
    description: "Tropical beaches, vibrant cities, and family-friendly attractions — all bundled into a stress-free Malaysian adventure.",
    itinerary: [
      { day: "Day 1", title: "Arrive Kuala Lumpur" },
      { day: "Day 2", title: "Petronas Towers & KL city tour" },
      { day: "Day 3", title: "Genting Highlands cable car" },
      { day: "Day 4", title: "Fly to Langkawi" },
      { day: "Day 5", title: "Island hopping & cable car" },
      { day: "Day 6", title: "Beach day & shopping" },
      { day: "Day 7", title: "Return home" },
    ],
  },
  {
    id: "baku", title: "Baku Discovery", location: "Azerbaijan", image: bakuImg,
    price: "PKR 195,000", duration: "6 Days / 5 Nights", group: "Up to 15 pax",
    highlights: ["Flame Towers light show", "Old City heritage walk", "Mud volcanoes tour", "Caspian Sea promenade", "Visa on arrival"],
    description: "The land of fire — futuristic skylines, ancient walled cities, and Caspian beauty. A rising favorite for Pakistani travelers.",
    itinerary: [
      { day: "Day 1", title: "Arrival & welcome dinner" },
      { day: "Day 2", title: "Old City & Maiden Tower" },
      { day: "Day 3", title: "Gobustan & mud volcanoes" },
      { day: "Day 4", title: "Gabala mountain tour" },
      { day: "Day 5", title: "Flame Towers & shopping" },
      { day: "Day 6", title: "Departure" },
    ],
  },
  {
    id: "thailand", title: "Thailand Beach Paradise", location: "Phuket & Bangkok", image: thailandImg,
    price: "PKR 175,000", duration: "7 Days / 6 Nights", group: "Couples & Friends",
    highlights: ["Phi Phi island tour", "Bangkok city tour", "Floating markets", "Thai massage spa", "Halal restaurants"],
    description: "Crystal beaches, vibrant nightlife, and ancient temples — Thailand offers something for every kind of traveler.",
    itinerary: [
      { day: "Day 1-2", title: "Bangkok: Grand Palace & markets" },
      { day: "Day 3", title: "Fly to Phuket" },
      { day: "Day 4", title: "Phi Phi islands tour" },
      { day: "Day 5", title: "James Bond island" },
      { day: "Day 6", title: "Beach day & spa" },
      { day: "Day 7", title: "Return home" },
    ],
  },
];

type UmrahPackage = {
  id: string; name: string; tier: string; price: string; duration: string;
  hotels: { makkah: string; madinah: string };
  inclusions: string[]; itinerary: { day: string; title: string }[];
  description: string; image: string; badge?: string;
};

const umrahPackages: UmrahPackage[] = [
  {
    id: "economy", name: "Economy", tier: "Essential Journey", price: "PKR 285,000",
    duration: "14 Days / 13 Nights",
    hotels: { makkah: "3-star, 800m from Haram (shared transport)", madinah: "3-star, 500m from Masjid Nabawi" },
    inclusions: ["Umrah visa & processing", "Return economy flights", "Shared quad room", "Daily breakfast", "Group transport Jeddah → Makkah → Madinah", "Mu'allim (guide) support", "Ziyarat in Makkah & Madinah"],
    itinerary: [
      { day: "Day 1", title: "Depart Pakistan → Jeddah → Makkah" },
      { day: "Day 2", title: "First Umrah performance" },
      { day: "Day 3-6", title: "Ibadah in Masjid al-Haram" },
      { day: "Day 7", title: "Ziyarat: Jabal Noor, Mina, Arafat" },
      { day: "Day 8", title: "Transfer to Madinah" },
      { day: "Day 9-12", title: "Ibadah in Masjid Nabawi" },
      { day: "Day 13", title: "Ziyarat: Quba, Uhud, Qiblatain" },
      { day: "Day 14", title: "Return to Pakistan" },
    ],
    description: "Our most affordable Umrah package — perfect for first-time pilgrims and groups. Comfortable, clean accommodations with reliable transport and spiritual support throughout your journey.",
    image: heroImg,
  },
  {
    id: "standard", name: "Standard", tier: "Comfort & Care", price: "PKR 425,000",
    duration: "14 Days / 13 Nights", badge: "Most Popular",
    hotels: { makkah: "4-star, 400m from Haram (Hilton or similar)", madinah: "4-star, 200m from Masjid Nabawi" },
    inclusions: ["All Economy inclusions", "Double/triple room sharing", "Daily breakfast & dinner buffet", "Private AC coach transfers", "Dedicated mu'allim per group", "ZamZam water (5L) included", "Welcome kit + Ihram"],
    itinerary: [
      { day: "Day 1", title: "Depart → Jeddah → Makkah (private transfer)" },
      { day: "Day 2", title: "First Umrah with mu'allim guidance" },
      { day: "Day 3-6", title: "Ibadah & daily group duas" },
      { day: "Day 7", title: "Full-day ziyarat with lunch" },
      { day: "Day 8", title: "Comfort transfer to Madinah" },
      { day: "Day 9-12", title: "Ibadah & Riyadh-ul-Jannah visits" },
      { day: "Day 13", title: "Madinah ziyarat tour" },
      { day: "Day 14", title: "Return home" },
    ],
    description: "Our most chosen package — the ideal balance of comfort and value. Stay close to the holy sites in 4-star hotels with private transport and personalized spiritual guidance.",
    image: madinahImg,
  },
  {
    id: "premium", name: "Premium", tier: "Royal Pilgrimage", price: "PKR 685,000",
    duration: "14 Days / 13 Nights",
    hotels: { makkah: "5-star, Haram-view rooms (Fairmont Clock Tower)", madinah: "5-star, Masjid Nabawi-view (Anwar Al Madinah Mövenpick)" },
    inclusions: ["All Standard inclusions", "Double room (option for single)", "All meals — premium buffets", "Luxury Mercedes vans for ziyarat", "VIP airport meet & assist", "Premium Ihram + gift box", "24/7 dedicated guide", "Optional Hajj upgrade available"],
    itinerary: [
      { day: "Day 1", title: "Business-class option → VIP transfer" },
      { day: "Day 2", title: "Private Umrah arrangements" },
      { day: "Day 3-6", title: "Tahajjud guidance + tafseer sessions" },
      { day: "Day 7", title: "Private ziyarat with scholar" },
      { day: "Day 8", title: "Luxury transfer to Madinah" },
      { day: "Day 9-12", title: "Riyadh-ul-Jannah special access" },
      { day: "Day 13", title: "Full Madinah heritage tour" },
      { day: "Day 14", title: "VIP return transfer" },
    ],
    description: "An unmatched spiritual experience with the finest hotels, dedicated guides, and white-glove service from start to finish. For those who want their sacred journey to be as serene as it is luxurious.",
    image: heroImg,
  },
];

type Blog = {
  id: string; title: string; excerpt: string; date: string; readTime: string; content: string;
};

const blogs: Blog[] = [
  {
    id: "umrah-guide", title: "Complete Umrah Guide for First-Timers",
    excerpt: "Everything you need to know before your sacred journey — from visa to Ihram, packing to rituals.",
    date: "May 2026", readTime: "8 min read",
    content: "Performing Umrah for the first time is a deeply emotional experience. Begin with the intention (Niyyah) and prepare your Ihram before crossing the Miqat. Pack light: two white Ihram sheets for men, modest clothing for women, comfortable sandals, a small prayer mat, and unscented toiletries. On arrival in Makkah, perform Tawaf around the Kaaba seven times, then Sa'i between Safa and Marwah. End with Halq or Taqsir. TravelEx assists with visa processing, hotel bookings near Haram, transport between Makkah and Madinah, and expert mu'allim guidance throughout your journey.",
  },
  {
    id: "best-time-northern", title: "Best Time to Visit Northern Pakistan",
    excerpt: "Plan your trip to Hunza, Skardu, and Naran based on weather, scenery and crowd levels.",
    date: "April 2026", readTime: "5 min read",
    content: "May to September is the prime window for Pakistan's north. April–May brings cherry blossoms to Hunza and lush green meadows in Naran Kaghan. June–August offers the warmest weather and full access to Khunjerab Pass and Deosai Plains, though crowds peak. September–October paints the valleys gold with autumn foliage — our personal favorite. Winter (December–February) is for adventurers only: snow blocks most passes but transforms places like Skardu into a magical white wonderland. Book 2 months in advance for peak season.",
  },
  {
    id: "visa-tips", title: "10 Visa Tips for Pakistani Passport Holders",
    excerpt: "Boost your visa approval chances with these insider tips from our visa specialists.",
    date: "March 2026", readTime: "6 min read",
    content: "1. Maintain a healthy bank balance (last 6 months statement). 2. Show strong ties to Pakistan — property, job letter, family. 3. Book refundable flights and hotels before applying. 4. Get a comprehensive travel insurance policy. 5. Write a clear cover letter explaining your trip purpose. 6. Avoid first-time travel to high-risk countries — build a passport history with UAE, Malaysia, Turkey first. 7. Apply early — at least 4 weeks before travel. 8. Provide accurate, consistent information across all documents. 9. Submit recent bank-stamped statements. 10. Use a trusted travel agency like TravelEx for document review and submission.",
  },
];

const services = [
  { icon: Compass, title: "Umrah Packages", desc: "Economy to premium, visa to ziyarat — handled with spiritual care." },
  { icon: Plane, title: "International Tours", desc: "Turkey, Dubai, Malaysia, Baku, Thailand and 15+ destinations." },
  { icon: MapPin, title: "Domestic Tours", desc: "Hunza, Naran, Skardu — discover Pakistan's breathtaking north." },
  { icon: Hotel, title: "Hotel Bookings", desc: "Best rates on hotels worldwide with verified TravelEx partners." },
  { icon: FileCheck, title: "Visa Assistance", desc: "Expert help for UAE, UK, Canada, Schengen and more." },
  { icon: Car, title: "Car Rental", desc: "Reliable vehicles for local trips and long-distance journeys." },
];

function Index() {
  const [openTour, setOpenTour] = useState<Tour | null>(null);
  const [openBlog, setOpenBlog] = useState<Blog | null>(null);
  const [openUmrah, setOpenUmrah] = useState<UmrahPackage | null>(null);
  const waLink = `https://wa.me/${WHATSAPP_INTL}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-gradient">TravelEx</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#tours" className="hover:text-primary transition-smooth">Tours</a>
            <a href="#umrah" className="hover:text-primary transition-smooth">Umrah</a>
            <a href="#blog" className="hover:text-primary transition-smooth">Blog</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-hero text-primary-foreground shadow-elegant animate-pulse-glow">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Book Now
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kaaba Makkah" className="h-full w-full object-cover animate-ken-burns" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary-glow/60 animate-gradient" />
        </div>
        {/* Animated blob orbs */}
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-primary/40 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

        <div className="relative container mx-auto px-6 py-32 md:py-48 text-primary-foreground">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur animate-pulse-glow">
              <Sparkles className="h-3 w-3" /> 10 Years of Trust • IATA Certified
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Journey of a Lifetime,{" "}
              <span className="block bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: "200% 200%" }}>
                Handled With Care
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Premium Umrah packages, curated international tours, and trusted travel services from Pakistan's leading agency.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift">
                <a href="#tours">Explore Tours <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover-lift">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Hero quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {[
                { v: "5000+", l: "Pilgrims" },
                { v: "15+", l: "Countries" },
                { v: "4.9★", l: "Rated" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-center hover-lift">
                  <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a href="#services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-scroll-hint">
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* Trust */}
      <section className="border-y border-border bg-gradient-soft py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Shield, label: "10 Years Trusted" },
            { icon: Award, label: "IATA Certified" },
            { icon: Users, label: "5000+ Happy Pilgrims" },
            { icon: Star, label: "4.9/5 Rated" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <t.icon className="h-7 w-7 text-primary" />
              <div className="text-sm font-semibold">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-24">
        <div className="text-center mb-14 animate-fade-in-up">
          <Badge variant="secondary" className="mb-3">What We Offer</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete Travel Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From sacred pilgrimages to dream vacations — one trusted partner for every journey.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={s.title} className="p-8 hover-lift border-border animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center mb-4 shadow-card">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="bg-gradient-soft py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 animate-fade-in-up">
            <Badge variant="secondary" className="mb-3">Featured Tours</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover the World</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Click any tour to view full details, day-by-day itinerary and inclusions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setOpenTour(t)}
                className="group text-left overflow-hidden rounded-xl bg-card border border-border shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" width={1200} height={800}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {t.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" /> {t.location}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">{t.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {t.duration}</span>
                    <span className="text-primary font-semibold flex items-center gap-1">View <ArrowRight className="h-3 w-3 transition-smooth group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah */}
      <section id="umrah" className="container mx-auto px-6 py-24">
        <div className="text-center mb-14 animate-fade-in-up">
          <Badge variant="secondary" className="mb-3">Umrah Packages</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Sacred Journey Awaits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click any package to view full details — hotels, daily itinerary, and what's included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {umrahPackages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setOpenUmrah(p)}
              className={`group relative text-left rounded-2xl border bg-card p-7 shadow-card hover-lift animate-fade-in-up overflow-hidden ${
                p.badge ? "border-primary ring-2 ring-primary/30" : "border-border"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p.badge && (
                <div className="absolute top-0 right-0 bg-gradient-hero text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-xl">
                  {p.badge}
                </div>
              )}
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">{p.tier}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">{p.name}</h3>
              <div className="text-3xl font-bold text-gradient mb-1">{p.price}</div>
              <div className="text-xs text-muted-foreground mb-5">per person • {p.duration}</div>

              <ul className="space-y-2 mb-5 text-sm">
                {p.inclusions.slice(0, 4).map((inc) => (
                  <li key={inc} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{inc}</span>
                  </li>
                ))}
                <li className="text-xs text-primary font-semibold pl-6">+ {p.inclusions.length - 4} more inclusions</li>
              </ul>

              <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                <span className="text-muted-foreground">Tap for full details</span>
                <ArrowRight className="h-4 w-4 text-primary transition-smooth group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Umrah feature strip */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: PlaneIcon, label: "Return Flights" },
            { icon: BedDouble, label: "Premium Hotels" },
            { icon: Bus, label: "Private Transport" },
            { icon: Utensils, label: "Halal Meals" },
          ].map((f, i) => (
            <div key={f.label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="h-10 w-10 rounded-lg bg-gradient-hero text-primary-foreground grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-sm">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-gradient-soft py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 animate-fade-in-up">
            <Badge variant="secondary" className="mb-3">Travel Insights</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Click any article to read the full story.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setOpenBlog(b)}
                className="group text-left p-7 rounded-xl bg-card border border-border shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {b.date}</span>
                  <span>•</span>
                  <span>{b.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-smooth">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{b.excerpt}</p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1">
                  Read more <ArrowRight className="h-3 w-3 transition-smooth group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Plan Your Journey</h2>
              <p className="text-white/90 mb-8 text-lg">Reach out anytime — we respond within minutes on WhatsApp.</p>
              <div className="space-y-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-smooth">
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="text-xs opacity-80">WhatsApp</div>
                    <div className="font-semibold">{WHATSAPP}</div>
                  </div>
                </a>
                <a href={`tel:${WHATSAPP}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-smooth">
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="text-xs opacity-80">Call Direct</div>
                    <div className="font-semibold">{WHATSAPP}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-smooth">
                  <Mail className="h-6 w-6" />
                  <div>
                    <div className="text-xs opacity-80">Email</div>
                    <div className="font-semibold break-all">{EMAIL}</div>
                  </div>
                </a>
                <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-smooth">
                  <Instagram className="h-6 w-6" />
                  <div>
                    <div className="text-xs opacity-80">Instagram</div>
                    <div className="font-semibold">@{INSTAGRAM}</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 animate-fade-in-up">
              <h3 className="font-bold text-2xl mb-4">Why Travel With Us?</h3>
              <ul className="space-y-3 text-white/90">
                {[
                  "10+ years of trusted operations across Pakistan",
                  "IATA, TAAP & Emaan Itehad certified",
                  "5000+ successful Umrah pilgrimages",
                  "24/7 on-trip support team",
                  "Best price guarantee on all packages",
                  "Custom itineraries built for your family",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <Plane className="h-5 w-5 text-primary" /> <span className="text-gradient">TravelEx Pakistan</span>
          </div>
          <p>© {new Date().getFullYear()} TravelEx. 10 Years of Trust.</p>
          <div className="flex gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
            <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={`mailto:${EMAIL}`} className="hover:text-primary"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-hero text-primary-foreground grid place-items-center shadow-elegant hover-lift animate-pulse-glow">
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Tour Modal */}
      <Dialog open={!!openTour} onOpenChange={(o) => !o && setOpenTour(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {openTour && (
            <>
              <div className="relative h-64 md:h-80">
                <img src={openTour.image} alt={openTour.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-1 text-xs opacity-90 mb-1"><MapPin className="h-3 w-3" /> {openTour.location}</div>
                  <DialogTitle className="text-3xl font-bold text-white">{openTour.title}</DialogTitle>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Duration</div>
                    <div className="font-semibold text-sm">{openTour.duration}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Group</div>
                    <div className="font-semibold text-sm">{openTour.group}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary">
                    <Star className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">From</div>
                    <div className="font-semibold text-sm">{openTour.price}</div>
                  </div>
                </div>
                <DialogDescription className="text-base text-foreground mb-6 leading-relaxed">
                  {openTour.description}
                </DialogDescription>

                <h4 className="font-bold mb-3">Tour Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {openTour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold mb-3">Day-by-Day Itinerary</h4>
                <div className="space-y-2 mb-6">
                  {openTour.itinerary.map((it) => (
                    <div key={it.day} className="flex gap-4 p-3 rounded-lg bg-secondary">
                      <div className="font-bold text-primary text-sm shrink-0 w-20">{it.day}</div>
                      <div className="text-sm">{it.title}</div>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full bg-gradient-hero text-primary-foreground shadow-elegant">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> Book This Tour on WhatsApp
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Umrah Modal */}
      <Dialog open={!!openUmrah} onOpenChange={(o) => !o && setOpenUmrah(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {openUmrah && (
            <>
              <div className="relative h-56 md:h-72">
                <img src={openUmrah.image} alt={openUmrah.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-wider opacity-90 mb-1">{openUmrah.tier}</div>
                  <DialogTitle className="text-3xl font-bold text-white">Umrah {openUmrah.name}</DialogTitle>
                  <div className="text-2xl font-bold mt-1">{openUmrah.price} <span className="text-sm font-normal opacity-80">/ person</span></div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <DialogDescription className="text-base text-foreground mb-6 leading-relaxed">
                  {openUmrah.description}
                </DialogDescription>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <Hotel className="h-4 w-4" /> Makkah Hotel
                    </div>
                    <div className="text-sm text-muted-foreground">{openUmrah.hotels.makkah}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <Hotel className="h-4 w-4" /> Madinah Hotel
                    </div>
                    <div className="text-sm text-muted-foreground">{openUmrah.hotels.madinah}</div>
                  </div>
                </div>

                <h4 className="font-bold mb-3">What's Included</h4>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {openUmrah.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {inc}
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold mb-3">Day-by-Day Itinerary</h4>
                <div className="space-y-2 mb-6">
                  {openUmrah.itinerary.map((it) => (
                    <div key={it.day} className="flex gap-4 p-3 rounded-lg bg-secondary">
                      <div className="font-bold text-primary text-sm shrink-0 w-24">{it.day}</div>
                      <div className="text-sm">{it.title}</div>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full bg-gradient-hero text-primary-foreground shadow-elegant">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> Inquire About {openUmrah.name}
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Blog Modal */}
      <Dialog open={!!openBlog} onOpenChange={(o) => !o && setOpenBlog(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {openBlog && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {openBlog.date}</span>
                  <span>•</span>
                  <span>{openBlog.readTime}</span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl">{openBlog.title}</DialogTitle>
                <DialogDescription className="text-base italic">{openBlog.excerpt}</DialogDescription>
              </DialogHeader>
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {openBlog.content}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

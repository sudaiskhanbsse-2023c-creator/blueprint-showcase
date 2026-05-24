import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Plane, MapPin, Hotel, Car, FileCheck, Compass, Phone, Mail, Instagram,
  MessageCircle, Star, Shield, Award, Clock, Calendar, Users, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import hunzaImg from "@/assets/tour-hunza.jpg";
import dubaiImg from "@/assets/tour-dubai.jpg";
import turkeyImg from "@/assets/tour-turkey.jpg";
import malaysiaImg from "@/assets/tour-malaysia.jpg";

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
};

const tours: Tour[] = [
  {
    id: "hunza", title: "Hunza & Naran Valley", location: "Northern Pakistan", image: hunzaImg,
    price: "PKR 45,000", duration: "6 Days / 5 Nights", group: "Up to 12 pax",
    highlights: ["Attabad Lake boating", "Khunjerab Pass visit", "Karimabad heritage walk", "4x4 jeep safaris", "All meals included"],
    description: "Experience the breathtaking beauty of Pakistan's north — turquoise lakes, snow-capped peaks, and ancient Silk Road heritage. Curated for families and adventure seekers.",
  },
  {
    id: "dubai", title: "Dubai Luxury Escape", location: "United Arab Emirates", image: dubaiImg,
    price: "PKR 185,000", duration: "5 Days / 4 Nights", group: "Couples & Families",
    highlights: ["Burj Khalifa 124th floor", "Desert safari with BBQ", "Marina dhow cruise", "Visa & flights included", "4-star hotel stay"],
    description: "From the world's tallest tower to golden desert dunes — a premium Dubai experience with everything handled, from visa to airport pickup.",
  },
  {
    id: "turkey", title: "Istanbul & Cappadocia", location: "Turkey", image: turkeyImg,
    price: "PKR 245,000", duration: "8 Days / 7 Nights", group: "Up to 20 pax",
    highlights: ["Hagia Sophia & Blue Mosque", "Hot air balloon ride", "Bosphorus dinner cruise", "Grand Bazaar tour", "Halal meals"],
    description: "Walk through empires in Istanbul and float over fairy chimneys in Cappadocia. A spiritually and culturally rich journey designed for Pakistani travelers.",
  },
  {
    id: "malaysia", title: "Malaysia Family Tour", location: "Kuala Lumpur & Langkawi", image: malaysiaImg,
    price: "PKR 165,000", duration: "7 Days / 6 Nights", group: "Family of 4",
    highlights: ["Petronas Twin Towers", "Langkawi island hopping", "Genting Highlands", "Cable car rides", "Visa assistance"],
    description: "Tropical beaches, vibrant cities, and family-friendly attractions — all bundled into a stress-free Malaysian adventure.",
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
          <Button asChild size="sm" className="bg-gradient-hero text-primary-foreground shadow-elegant">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Book Now
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kaaba Makkah" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary-glow/60" />
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-48 text-primary-foreground">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur">
              <Star className="h-3 w-3" /> 10 Years of Trust • IATA Certified
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Journey of a Lifetime, <span className="text-white/90">Handled With Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Premium Umrah packages, curated international tours, and trusted travel services from Pakistan's leading agency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                <a href="#tours">Explore Tours <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">Click any tour to view full details, pricing and inclusions.</p>
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
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" /> {t.location}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">{t.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {t.duration}</span>
                    <span className="text-primary font-semibold flex items-center gap-1">View <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah */}
      <section id="umrah" className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-3">Umrah Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Sacred Journey Awaits</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Performed with reverence and care. TravelEx handles your Umrah from visa to ziyarat — so you can focus entirely on your spiritual experience.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { name: "Economy", price: "PKR 285,000", desc: "Shared room, 14 days, group transport" },
                { name: "Standard", price: "PKR 425,000", desc: "Double room, 4-star hotels, private transfers" },
                { name: "Premium", price: "PKR 685,000", desc: "5-star hotels near Haram, VIP services" },
              ].map((p, i) => (
                <Card key={p.name} className="p-5 flex items-center justify-between hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div>
                    <div className="font-bold text-lg">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{p.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </Card>
              ))}
            </div>
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground shadow-elegant">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </a>
            </Button>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
            <img src={heroImg} alt="Kaaba" loading="lazy" width={1200} height={800}
              className="relative rounded-3xl shadow-elegant animate-float" />
          </div>
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
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-hero text-primary-foreground grid place-items-center shadow-elegant hover-lift animate-float">
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
                      <span className="text-primary mt-0.5">✓</span> {h}
                    </li>
                  ))}
                </ul>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Compass, Plane, MapPin, Hotel, FileCheck, Shield, Star, Award, Users, Clock } from "lucide-react";
import { heroImg, tours, umrahPackages, blogs, services, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TravelEx Pakistan — Explore The World With Confidence" },
      { name: "description", content: "Premium Umrah packages, international tours, visa assistance and travel services designed for unforgettable journeys." },
      { property: "og:title", content: "TravelEx Pakistan — Explore The World With Confidence" },
      { property: "og:description", content: "Premium Umrah packages, international tours, visa assistance and travel services." },
    ],
  }),
});

const iconMap: Record<string, typeof Compass> = { Compass, Plane, MapPin, Hotel, FileCheck, Shield, Users };

function HomePage() {
  const featured = tours.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Snow capped mountains and turquoise lake" className="h-full w-full object-cover animate-ken-burns" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        {/* Floating decorative orbs */}
        <div className="absolute top-32 -left-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white">
          <div className="max-w-4xl animate-fade-in-up">
            <Badge className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md rounded-full px-4 py-1.5">
              <Sparkles className="h-3 w-3 mr-1 text-orange" /> 10 Years of Trust • IATA Certified
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
              Explore The World{" "}
              <span className="block">With <span className="text-orange italic">Confidence</span></span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed">
              Premium Umrah packages, international tours, visa assistance and travel services designed for unforgettable journeys.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-14 text-base shadow-orange">
                <Link to="/tours">Explore Tours <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-foreground rounded-full px-8 h-14 text-base">
                <Link to="/booking">Book Your Trip</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs flex flex-col items-center gap-2 animate-scroll-hint">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-white/50" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 stagger">
          {[
            { num: "5000+", label: "Happy Pilgrims" },
            { num: "15+", label: "Destinations" },
            { num: "10", label: "Years Trusted" },
            { num: "4.9★", label: "Customer Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">{s.num}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="border-orange text-orange mb-4 rounded-full">What We Do</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel services, end to end</h2>
            <p className="text-muted-foreground">From sacred journeys to luxury escapes — every detail handled by our expert team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {services.slice(0, 6).map((s) => {
              const Icon = iconMap[s.icon] ?? Compass;
              return (
                <Card key={s.title} className="p-6 border-2 hover:border-orange hover-lift group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-hero text-white flex items-center justify-center mb-4 group-hover:bg-gradient-orange transition-smooth">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full btn-orange-hover">
              <Link to="/services">View All Services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between mb-12 gap-4 animate-fade-in-up">
            <div>
              <Badge variant="outline" className="border-orange text-orange mb-4 rounded-full">Featured Tours</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Trending destinations</h2>
            </div>
            <Button asChild variant="ghost" className="text-orange hover:text-orange">
              <Link to="/tours">View all tours <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {featured.map((t) => (
              <Link key={t.id} to="/tours" className="group">
                <Card className="overflow-hidden border-0 shadow-card hover-lift h-full">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="text-xs text-orange mb-1">{t.location}</div>
                      <h3 className="font-bold text-lg leading-tight mb-2">{t.title}</h3>
                      <div className="flex items-center justify-between text-xs text-white/90">
                        <span>{t.duration}</span>
                        <span className="font-semibold">{t.price}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UMRAH PREVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="border-orange text-orange mb-4 rounded-full">Sacred Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Umrah Packages</h2>
            <p className="text-muted-foreground">Tiered packages crafted with spiritual care and modern comfort.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {umrahPackages.map((p) => (
              <Card key={p.id} className={`p-6 hover-lift border-2 ${p.badge ? "border-orange shadow-orange" : ""}`}>
                {p.badge && <Badge className="bg-orange text-white mb-3">{p.badge}</Badge>}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.tier}</p>
                <div className="text-3xl font-bold text-gradient mb-1">{p.price}</div>
                <div className="text-xs text-muted-foreground mb-6">{p.duration}</div>
                <ul className="text-sm space-y-2 mb-6">
                  {p.inclusions.slice(0, 4).map((i) => <li key={i} className="flex gap-2"><Star className="h-4 w-4 text-orange shrink-0 mt-0.5" />{i}</li>)}
                </ul>
                <Button asChild className="w-full rounded-full bg-primary hover:bg-orange transition-smooth">
                  <Link to="/umrah">View details</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-orange/30 blur-3xl animate-blob" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why TravelEx?</h2>
            <p className="text-white/80">A decade of careful planning, transparent pricing, and end-to-end support.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {[
              { icon: Shield, title: "IATA Certified", desc: "Licensed and trusted by global aviation authorities." },
              { icon: Award, title: "Best Pricing", desc: "Direct partnerships mean no middleman markups." },
              { icon: Clock, title: "24/7 Support", desc: "Wherever you are, our team is one call away." },
              { icon: Users, title: "Personalised", desc: "Tailored itineraries — not cookie-cutter packages." },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-smooth">
                <b.icon className="h-10 w-10 mx-auto mb-4 text-orange" />
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-white/80">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between mb-12 gap-4 animate-fade-in-up">
            <div>
              <Badge variant="outline" className="border-orange text-orange mb-4 rounded-full">Journal</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">From the travel blog</h2>
            </div>
            <Button asChild variant="ghost" className="text-orange hover:text-orange">
              <Link to="/blog">All articles <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {blogs.slice(0, 3).map((b) => (
              <Link key={b.id} to="/blog" className="group">
                <Card className="overflow-hidden border-0 shadow-card hover-lift h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-orange font-medium mb-2">{b.category} • {b.readTime}</div>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-orange transition-smooth">{b.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-hero p-12 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-orange/30 blur-3xl animate-blob" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Your dream trip is one click away</h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">Tell us where you want to go — we'll handle visas, flights, hotels, transport and ziyarat.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-14 shadow-orange">
                  <Link to="/booking">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-foreground rounded-full px-8 h-14">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

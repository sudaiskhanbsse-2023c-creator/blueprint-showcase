import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, Plane, MapPin, Hotel, FileCheck, Shield, Users, Car } from "lucide-react";
import { services, heroImg } from "@/lib/site-data";
import { PageHero } from "./tours";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services — TravelEx Pakistan" },
      { name: "description", content: "Visa assistance, flight booking, hotel reservations, Umrah, travel insurance, group tours and corporate travel." },
    ],
  }),
});

const iconMap: Record<string, typeof Compass> = { Compass, Plane, MapPin, Hotel, FileCheck, Shield, Users, Car };

function ServicesPage() {
  return (
    <>
      <PageHero title="Services" subtitle="Everything you need for stress-free, well-planned travel — under one trusted roof." image={heroImg} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {services.map((s) => {
              const Icon = iconMap[s.icon] ?? Compass;
              return (
                <Card key={s.title} className="p-8 border-2 hover:border-orange hover-lift group">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-hero text-white flex items-center justify-center mb-5 group-hover:bg-gradient-orange transition-smooth">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-8">Tell us about your trip — we'll recommend the right combination of services.</p>
          <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-14 shadow-orange">
            <Link to="/booking">Start a booking</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

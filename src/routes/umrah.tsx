import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, Hotel, Calendar, Star } from "lucide-react";
import { umrahPackages, type UmrahPackage, umrahHero } from "@/lib/site-data";
import { PageHero } from "./tours";

export const Route = createFileRoute("/umrah")({
  component: UmrahPage,
  head: () => ({
    meta: [
      { title: "Umrah Packages — TravelEx Pakistan" },
      { name: "description", content: "Economy to VIP Umrah packages with visa, flights, 3-5 star hotels and dedicated mu'allim support." },
    ],
  }),
});

function UmrahPage() {
  const [open, setOpen] = useState<UmrahPackage | null>(null);
  return (
    <>
      <PageHero title="Umrah Packages" subtitle="A sacred journey, handled with the care it deserves — visa to ziyarat, every detail covered." image={umrahHero} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="border-orange text-orange mb-3 rounded-full">Compare Packages</Badge>
            <h2 className="text-4xl font-bold mb-4">Choose your spiritual journey</h2>
            <p className="text-muted-foreground">Four carefully crafted tiers — pick what matches your comfort and budget.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {umrahPackages.map((p) => (
              <button key={p.id} onClick={() => setOpen(p)} className="text-left">
                <Card className={`p-6 hover-lift h-full border-2 ${p.badge ? "border-orange shadow-orange" : ""}`}>
                  {p.badge && <Badge className="bg-orange text-white mb-3">{p.badge}</Badge>}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.tier}</p>
                  <div className="text-3xl font-bold text-gradient mb-1">{p.price}</div>
                  <div className="text-xs text-muted-foreground mb-6">{p.duration}</div>
                  <ul className="text-sm space-y-2 mb-6">
                    {p.inclusions.slice(0, 5).map((i) => <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-orange shrink-0 mt-0.5" />{i}</li>)}
                  </ul>
                  <div className="text-xs text-orange font-medium">Click for full details →</div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Hotel, title: "Premium Hotels", desc: "Stay close to Haram and Masjid Nabawi — 3 to 5 star options." },
            { icon: Calendar, title: "Flexible Dates", desc: "Multiple departure dates available year-round." },
            { icon: Star, title: "Spiritual Guidance", desc: "Dedicated mu'allim guides your prayers and ziyarat." },
          ].map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-gradient-orange text-white flex items-center justify-center mx-auto mb-4">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {open && (
            <>
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img src={open.image} alt={open.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <DialogHeader>
                  {open.badge && <Badge className="bg-orange text-white w-fit mb-2">{open.badge}</Badge>}
                  <DialogTitle className="text-3xl">{open.name} — {open.tier}</DialogTitle>
                  <DialogDescription>{open.description}</DialogDescription>
                </DialogHeader>
                <div className="flex items-end gap-4 my-4">
                  <div className="text-4xl font-bold text-gradient">{open.price}</div>
                  <div className="text-sm text-muted-foreground mb-1">{open.duration}</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-xs text-orange font-semibold mb-1">MAKKAH HOTEL</div>
                    <div className="text-sm">{open.hotels.makkah}</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-xs text-orange font-semibold mb-1">MADINAH HOTEL</div>
                    <div className="text-sm">{open.hotels.madinah}</div>
                  </div>
                </div>
                <h4 className="font-bold mb-3">What's included</h4>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {open.inclusions.map((i) => <li key={i} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-orange shrink-0 mt-0.5" />{i}</li>)}
                </ul>
                <h4 className="font-bold mb-3">Day-by-day</h4>
                <div className="space-y-2 mb-6">
                  {open.itinerary.map((d) => (
                    <div key={d.day} className="flex gap-3 p-3 bg-secondary rounded-lg">
                      <div className="text-orange font-bold min-w-[90px]">{d.day}</div>
                      <div className="text-sm">{d.title}</div>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-orange hover:bg-orange/90 text-white rounded-full h-12">
                  <a href={`/booking?tour=${encodeURIComponent("Umrah " + open.name)}`}>Book this package</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Clock, Users, Star, Check } from "lucide-react";
import { tours, type Tour, heroImg } from "@/lib/site-data";

export const Route = createFileRoute("/tours")({
  component: ToursPage,
  head: () => ({
    meta: [
      { title: "Tours & Destinations — TravelEx Pakistan" },
      { name: "description", content: "Curated international and domestic tours — Turkey, Dubai, Malaysia, Hunza, Skardu, Thailand, Baku and more." },
    ],
  }),
});

function ToursPage() {
  const [open, setOpen] = useState<Tour | null>(null);
  return (
    <>
      <PageHero title="Tours & Destinations" subtitle="From the snow-capped peaks of Hunza to the golden dunes of Dubai — handpicked journeys for every traveler." image={heroImg} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
            <div>
              <Badge variant="outline" className="border-orange text-orange mb-3 rounded-full">All Tours</Badge>
              <h2 className="text-4xl font-bold">Explore our destinations</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Click any tour to see itinerary, highlights and pricing details.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {tours.map((t) => (
              <button key={t.id} onClick={() => setOpen(t)} className="text-left group">
                <Card className="overflow-hidden border-0 shadow-card hover-lift h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-orange text-white">{t.price}</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-xs text-orange mb-2"><MapPin className="h-3 w-3" /> {t.location}</div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-orange transition-smooth">{t.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{t.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {t.duration}</span>
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {t.group}</span>
                    </div>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {open && (
            <>
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img src={open.image} alt={open.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <div className="flex items-center gap-1 text-sm text-orange mb-1"><MapPin className="h-4 w-4" /> {open.location}</div>
                  <DialogTitle className="text-3xl">{open.title}</DialogTitle>
                  <DialogDescription className="text-base">{open.description}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 my-6 text-center">
                  <div className="p-3 bg-secondary rounded-lg"><div className="text-2xl font-bold text-gradient">{open.price}</div><div className="text-xs text-muted-foreground">starting from</div></div>
                  <div className="p-3 bg-secondary rounded-lg"><div className="font-semibold">{open.duration}</div><div className="text-xs text-muted-foreground">duration</div></div>
                  <div className="p-3 bg-secondary rounded-lg"><div className="font-semibold">{open.group}</div><div className="text-xs text-muted-foreground">group</div></div>
                </div>
                <h4 className="font-bold mb-3 flex items-center gap-2"><Star className="h-4 w-4 text-orange" /> Highlights</h4>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {open.highlights.map((h) => <li key={h} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-orange shrink-0 mt-0.5" />{h}</li>)}
                </ul>
                <h4 className="font-bold mb-3">Itinerary</h4>
                <div className="space-y-2 mb-6">
                  {open.itinerary.map((d) => (
                    <div key={d.day} className="flex gap-3 p-3 bg-secondary rounded-lg">
                      <div className="text-orange font-bold min-w-[80px]">{d.day}</div>
                      <div className="text-sm">{d.title}</div>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-orange hover:bg-orange/90 text-white rounded-full h-12">
                  <a href={`/booking?tour=${encodeURIComponent(open.title)}`}>Book this tour</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover animate-ken-burns" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

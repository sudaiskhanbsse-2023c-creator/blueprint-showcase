import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";
import { blogs, type Blog, blogHero } from "@/lib/site-data";
import { PageHero } from "./tours";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Travel Blog — TravelEx Pakistan" },
      { name: "description", content: "Travel guides, Umrah tips, visa advice and destination highlights from the TravelEx team." },
    ],
  }),
});

function BlogPage() {
  const [open, setOpen] = useState<Blog | null>(null);
  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero title="Travel Journal" subtitle="Guides, tips and stories to inspire your next adventure." image={blogHero} />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <button onClick={() => setOpen(featured)} className="block w-full text-left mb-12 group">
            <Card className="overflow-hidden border-0 shadow-card hover-lift">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="bg-orange text-white w-fit mb-3">Featured</Badge>
                  <div className="text-xs text-orange font-medium mb-2 flex items-center gap-3">
                    <span>{featured.category}</span><span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-orange transition-smooth">{featured.title}</h2>
                  <p className="text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6 text-orange font-medium">Read full article →</div>
                </div>
              </div>
            </Card>
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {rest.map((b) => (
              <button key={b.id} onClick={() => setOpen(b)} className="text-left group">
                <Card className="overflow-hidden border-0 shadow-card hover-lift h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-orange font-medium mb-2 flex items-center gap-2"><span>{b.category}</span><span>•</span><span>{b.readTime}</span></div>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-orange transition-smooth">{b.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{b.excerpt}</p>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 border-t pt-3"><Calendar className="h-3 w-3" /> {b.date}</div>
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
              <div className="p-8">
                <DialogHeader>
                  <Badge className="bg-orange text-white w-fit mb-2">{open.category}</Badge>
                  <DialogTitle className="text-3xl leading-tight">{open.title}</DialogTitle>
                  <DialogDescription className="flex items-center gap-3 text-sm">
                    <span>{open.date}</span><span>•</span><span>{open.readTime}</span>
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-6 text-base leading-relaxed whitespace-pre-line">{open.content}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

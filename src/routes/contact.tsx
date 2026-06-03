import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, MapPin, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP, EMAIL, INSTAGRAM, WA_LINK, heroImg } from "@/lib/site-data";
import { PageHero } from "./tours";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — TravelEx Pakistan" },
      { name: "description", content: "Reach TravelEx via WhatsApp, email, Instagram or visit our Peshawar office." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero title="Get in touch" subtitle="Our travel experts are ready to help plan your next journey." image={heroImg} />

      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4 stagger">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP, href: WA_LINK, accent: true },
              { icon: Phone, label: "Phone", value: WHATSAPP, href: `tel:+92${WHATSAPP.slice(1)}` },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Instagram, label: "Instagram", value: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}` },
              { icon: MapPin, label: "Office", value: "Peshawar, Pakistan" },
              { icon: Clock, label: "Hours", value: "Mon–Sat, 9 AM – 9 PM" },
            ].map((c) => {
              const Body = (
                <Card className={`p-5 flex items-center gap-4 hover-lift border-2 ${c.accent ? "border-orange shadow-orange" : ""}`}>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${c.accent ? "bg-orange text-white" : "bg-gradient-hero text-white"}`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                    <div className="font-semibold break-all">{c.value}</div>
                  </div>
                </Card>
              );
              return c.href ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{Body}</a> : <div key={c.label}>{Body}</div>;
            })}
          </div>

          <div>
            <Card className="overflow-hidden border-2">
              <iframe
                title="TravelEx Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13262.123!2d71.5249!3d34.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGVzaGF3YXIsIFBha2lzdGFu!5e0!3m2!1sen!2s!4v1700000000000"
                className="w-full h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">Visit us in Peshawar</h3>
                <p className="text-sm text-muted-foreground mb-4">Walk-in consultations are free.</p>
                <Button asChild className="bg-orange hover:bg-orange/90 text-white rounded-full">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Message us first</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

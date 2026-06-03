import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, ArrowLeft } from "lucide-react";
import { WHATSAPP_INTL, tours, umrahPackages } from "@/lib/site-data";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  validateSearch: (s: Record<string, unknown>) => ({ tour: typeof s.tour === "string" ? s.tour : "" }),
  head: () => ({
    meta: [
      { title: "Book Your Trip — TravelEx Pakistan" },
      { name: "description", content: "Submit your booking request and finalize on WhatsApp in seconds." },
    ],
  }),
});

type FormState = {
  fullName: string; phone: string; whatsapp: string; email: string;
  departureCity: string; destination: string; packageType: string;
  travelers: string; travelDate: string; notes: string;
};

const empty: FormState = {
  fullName: "", phone: "", whatsapp: "", email: "",
  departureCity: "", destination: "", packageType: "",
  travelers: "1", travelDate: "", notes: "",
};

function BookingPage() {
  const { tour } = Route.useSearch();
  const [form, setForm] = useState<FormState>({ ...empty, destination: tour || "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waMessage = encodeURIComponent(
    `*New Booking Request — TravelEx*\n\n` +
    `*Name:* ${form.fullName}\n*Phone:* ${form.phone}\n*WhatsApp:* ${form.whatsapp}\n*Email:* ${form.email}\n\n` +
    `*From:* ${form.departureCity}\n*Destination:* ${form.destination}\n*Package:* ${form.packageType}\n` +
    `*Travelers:* ${form.travelers}\n*Travel Date:* ${form.travelDate}\n\n` +
    `*Notes:* ${form.notes || "—"}`
  );
  const waLink = `https://wa.me/${WHATSAPP_INTL}?text=${waMessage}`;

  const destinationOptions = [...tours.map((t) => t.title), ...umrahPackages.map((p) => `Umrah ${p.name}`), "Custom destination"];

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/" className="text-sm text-muted-foreground hover:text-orange flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        {!submitted ? (
          <Card className="p-8 md:p-12 border-2 shadow-elegant animate-fade-in-up">
            <Badge variant="outline" className="border-orange text-orange mb-3 rounded-full">Booking Form</Badge>
            <h1 className="text-4xl font-bold mb-2">Book your trip</h1>
            <p className="text-muted-foreground mb-8">Fill the form — we'll prepare a personalised quote and confirm on WhatsApp.</p>

            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *"><Input required maxLength={100} value={form.fullName} onChange={update("fullName")} /></Field>
              <Field label="Phone Number *"><Input required type="tel" maxLength={20} value={form.phone} onChange={update("phone")} placeholder="03XX XXXXXXX" /></Field>
              <Field label="WhatsApp Number *"><Input required type="tel" maxLength={20} value={form.whatsapp} onChange={update("whatsapp")} placeholder="03XX XXXXXXX" /></Field>
              <Field label="Email *"><Input required type="email" maxLength={255} value={form.email} onChange={update("email")} /></Field>
              <Field label="Departure City *"><Input required maxLength={80} value={form.departureCity} onChange={update("departureCity")} placeholder="Peshawar, Lahore..." /></Field>
              <Field label="Destination *">
                <select required value={form.destination} onChange={update("destination")} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <option value="">Select destination</option>
                  {destinationOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>
              <Field label="Package Type *">
                <select required value={form.packageType} onChange={update("packageType")} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <option value="">Select type</option>
                  <option>Economy</option><option>Standard</option><option>Premium</option><option>VIP</option><option>Custom</option>
                </select>
              </Field>
              <Field label="Number of Travelers *"><Input required type="number" min={1} max={50} value={form.travelers} onChange={update("travelers")} /></Field>
              <Field label="Travel Date *" className="sm:col-span-2"><Input required type="date" value={form.travelDate} onChange={update("travelDate")} /></Field>
              <Field label="Additional Notes" className="sm:col-span-2"><Textarea maxLength={1000} value={form.notes} onChange={update("notes")} placeholder="Any preferences, accessibility needs, special requests..." rows={4} /></Field>

              <div className="sm:col-span-2 mt-2">
                <Button type="submit" size="lg" className="w-full bg-orange hover:bg-orange/90 text-white rounded-full h-14 text-base shadow-orange">
                  Continue to Confirmation
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          <Card className="p-8 md:p-12 border-2 border-orange shadow-orange text-center animate-fade-in-up">
            <div className="h-20 w-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Almost done!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Send your booking details directly to our team on WhatsApp to finalize and receive your personalised quote.
            </p>
            <div className="bg-secondary rounded-2xl p-6 text-left mb-8 max-w-md mx-auto text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Name</div><div className="font-medium">{form.fullName}</div>
                <div className="text-muted-foreground">Destination</div><div className="font-medium">{form.destination}</div>
                <div className="text-muted-foreground">Package</div><div className="font-medium">{form.packageType}</div>
                <div className="text-muted-foreground">Travelers</div><div className="font-medium">{form.travelers}</div>
                <div className="text-muted-foreground">Date</div><div className="font-medium">{form.travelDate}</div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full h-14 px-8 text-base">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Send Booking Request on WhatsApp
              </a>
            </Button>
            <button onClick={() => setSubmitted(false)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-orange">Edit details</button>
          </Card>
        )}
      </div>
    </section>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5 block">{label}</Label>
      {children}
    </div>
  );
}

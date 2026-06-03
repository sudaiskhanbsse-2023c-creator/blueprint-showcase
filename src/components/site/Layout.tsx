import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_LINK, WHATSAPP, EMAIL, INSTAGRAM, logoImg } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/umrah", label: "Umrah" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        transparent
          ? "bg-transparent"
          : "backdrop-blur-xl bg-background/75 border-b border-border/50 shadow-sm"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoImg} alt="TravelEx" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" width={48} height={48} />
          <span className={cn("hidden sm:block font-bold text-xl tracking-tight", transparent ? "text-white" : "text-foreground")}>
            Travel<span className="text-orange">Ex</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-smooth",
                transparent ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
              )}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-orange text-white shadow-orange" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex bg-orange hover:bg-orange/90 text-white rounded-full px-5 shadow-orange transition-smooth">
            <Link to="/booking">Book Now</Link>
          </Button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn("lg:hidden p-2 rounded-full transition-smooth", transparent ? "text-white hover:bg-white/20" : "text-foreground hover:bg-accent")}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden animate-slide-down bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-3 rounded-lg text-base font-medium hover:bg-accent transition-smooth"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-orange/10 text-orange" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-orange hover:bg-orange/90 text-white rounded-full">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-hero text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImg} alt="TravelEx" className="h-12 w-12 object-contain bg-white rounded-full p-1" width={48} height={48} loading="lazy" />
            <span className="font-bold text-2xl">Travel<span className="text-orange">Ex</span></span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">Premium travel agency in Pakistan — Umrah, international tours, visa assistance and more. 10 years of trusted service.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {navItems.slice(1).map((i) => <li key={i.to}><Link to={i.to} className="hover:text-orange transition-smooth">{i.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange" /> {WHATSAPP}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange" /> <span className="break-all">{EMAIL}</span></li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-orange" /> @{INSTAGRAM}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange" /> Peshawar, Pakistan</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Ready to Travel?</h4>
          <p className="text-white/80 text-sm mb-4">Book your dream trip in minutes.</p>
          <Button asChild className="bg-orange hover:bg-orange/90 text-white rounded-full w-full">
            <Link to="/booking">Start Booking</Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} TravelEx Pakistan. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl animate-pulse-glow transition-smooth hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function SiteLayout() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1 animate-fade-in" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

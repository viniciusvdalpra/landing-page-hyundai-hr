import heroImage from "@/assets/amarok-hero.jpg";
import logo from "@/assets/logo-armazem.png";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Truck, Award, Package } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?l=pt&phone=5549999484754&text=Ol%C3%A1%2C%20preciso%20de%20pe%C3%A7as%20de%20inje%C3%A7%C3%A3o%20para%20Hyundai%20HR%202.5.%20Pode%20me%20ajudar%3F";

const trustIndicators = [
  { icon: Package, label: "+100.000 pedidos enviados" },
  { icon: Truck, label: "Envio rápido para todo Brasil" },
  { icon: Award, label: "Especialistas em injeção Delphi" },
];

const HeroSection = () => (
  <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-greige pt-16 md:pt-24">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Hyundai HR 2.5 16V diesel" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-white/55" />
    </div>
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center px-6 py-6 md:px-12 md:py-8">
      <img src={logo} alt="Armazém Auto Peças" className="h-36 md:h-48" />
    </div>
    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <div className="mx-auto mb-6 -mt-10 flex h-28 w-28 items-center justify-center rounded-full bg-white/80 shadow-lg md:-mt-16 md:h-36 md:w-36">
        <span className="font-display text-3xl font-bold text-primary md:text-4xl">HR</span>
      </div>
      <h1 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl" style={{ lineHeight: 1.35, color: '#374151' }}>
        Peças de Injeção Diesel{" "}
        <span className="block">para Hyundai</span>
        <span className="text-primary text-3xl md:text-5xl lg:text-6xl">HR 2.5 16V</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl" style={{ color: '#4b5563' }}>
        Sistema Delphi CRDI · Motor D4CB Euro V · Compatível com Kia Bongo K2500
      </p>
      <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <Button size="lg" className="h-14 px-10 font-display text-lg uppercase tracking-wide shadow-lg shadow-primary/20" onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}>
            Ver peças para HR
            <ChevronDown className="ml-2" size={20} />
          </Button>
          <span className="text-xs text-foreground/50">Peças compatíveis com HR e Bongo K2500</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Button asChild size="lg" className="h-14 bg-whatsapp px-10 font-display text-lg uppercase tracking-wide text-white shadow-lg shadow-whatsapp/20 hover:bg-whatsapp/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Falar com especialista
            </a>
          </Button>
          <span className="text-xs text-foreground/50">Atendimento rápido via WhatsApp</span>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        {trustIndicators.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-foreground/50">
            <item.icon size={18} className="text-primary/70" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown size={32} className="text-foreground/30" />
    </div>
  </section>
);

export default HeroSection;

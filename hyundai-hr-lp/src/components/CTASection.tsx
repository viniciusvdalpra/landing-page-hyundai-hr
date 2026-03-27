import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?l=pt&phone=5549999484754&text=Ol%C3%A1%2C%20preciso%20de%20pe%C3%A7as%20de%20inje%C3%A7%C3%A3o%20para%20Hyundai%20HR%202.5.%20Pode%20me%20ajudar%3F";

const CTASection = () => (
  <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
    <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="mx-auto max-w-3xl px-6 text-center">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-secondary-foreground md:text-5xl">
        Encontre agora a peça correta para sua{" "}
        <span className="text-primary">Hyundai HR</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-secondary-foreground/70">
        Fale agora com nossos especialistas em injeção Delphi e receba um orçamento sem compromisso. Também atendemos Kia Bongo K2500.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="h-16 px-10 font-display text-lg uppercase tracking-wide shadow-lg shadow-primary/30" onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}>
          Ver peças para HR <ArrowRight className="ml-2" size={20} />
        </Button>
        <Button asChild size="lg" className="h-16 bg-whatsapp px-10 font-display text-lg uppercase tracking-wide text-whatsapp-foreground shadow-lg shadow-whatsapp/20 hover:bg-whatsapp/90">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={22} /> Falar no WhatsApp
          </a>
        </Button>
      </div>
      <p className="mt-6 text-sm text-secondary-foreground/50">Atendimento de segunda a sexta, das 8h às 18h</p>
    </div>
  </section>
);

export default CTASection;

import { Truck, Package, Award, Headphones, MessageCircle } from "lucide-react";

const badges = [
  { icon: Truck, title: "Envio Rápido para Todo Brasil", description: "Despacho em até 24h para todo o Brasil. Receba suas peças de Amarok com rapidez e segurança." },
  { icon: Package, title: "Estoque Próprio no Brasil", description: "Peças prontas para envio imediato, sem necessidade de importação ou longas esperas." },
  { icon: Award, title: "Peças Premium e Originais", description: "Trabalhamos com marcas reconhecidas como Bosch, Delphi e outros fabricantes OEM homologados." },
  { icon: Headphones, title: "Especialistas em Injeção Diesel", description: "Equipe técnica preparada para ajudar na escolha correta das peças para Amarok." },
  { icon: MessageCircle, title: "Atendimento Rápido no WhatsApp", description: "Fale diretamente com um especialista e tire suas dúvidas antes da compra." },
];

const TrustSection = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wider text-primary shadow-md shadow-primary/10">
          Diferenciais
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Por que comprar peças para Amarok na{" "}
          <span className="text-primary">Armazém Auto Peças?</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-5">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <badge.icon size={28} />
            </div>
            <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-foreground md:text-base">
              {badge.title}
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;

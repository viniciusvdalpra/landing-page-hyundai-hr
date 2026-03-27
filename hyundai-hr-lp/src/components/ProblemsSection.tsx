import { AlertTriangle, Gauge, Zap, Fuel, Wind, ArrowDown } from "lucide-react";

const symptoms = [
  { icon: Zap, label: "Motor falhando", description: <>Funcionamento irregular e engasgos em marcha lenta indicam falha nos <strong className="font-semibold text-foreground">bicos injetores Delphi</strong>.</> },
  { icon: Gauge, label: "Perda de potência", description: <>Aceleração fraca com carga pode significar <strong className="font-semibold text-foreground">bomba de alta pressão</strong> com desgaste.</> },
  { icon: AlertTriangle, label: "Dificuldade na partida", description: <>Motor demorando para pegar, especialmente a frio, é sinal de problema no <strong className="font-semibold text-foreground">sistema de combustível</strong>.</> },
  { icon: Fuel, label: "Consumo elevado", description: <>Gasto excessivo de diesel aponta para <strong className="font-semibold text-foreground">válvulas do bico injetor</strong> com desgaste.</> },
  { icon: Wind, label: "Fumaça no escape", description: <>Fumaça preta ou branca excessiva indica queima irregular por falha na <strong className="font-semibold text-foreground">injeção Delphi</strong>.</> },
];

const ProblemsSection = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wider text-destructive">
          Atenção
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Sua HR apresenta algum destes sintomas de{" "}
          <span className="text-primary">injeção?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Esses sintomas geralmente indicam falhas no sistema de injeção diesel Delphi CRDI da Hyundai HR 2.5 16V. Identifique o problema antes que ele cause danos maiores ao motor D4CB.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {symptoms.map((symptom) => (
          <div key={symptom.label} className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <symptom.icon size={38} strokeWidth={1.8} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-foreground">{symptom.label}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{symptom.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-2 text-center">
        <ArrowDown size={20} className="text-primary/50" />
        <p className="text-sm font-medium text-muted-foreground">
          Veja abaixo as principais peças do sistema de injeção Delphi que podem resolver esses problemas.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemsSection;

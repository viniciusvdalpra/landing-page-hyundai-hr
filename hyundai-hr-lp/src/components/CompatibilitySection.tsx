import { Check } from "lucide-react";

const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const CompatibilitySection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="mx-auto max-w-5xl px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wider text-primary shadow-md shadow-primary/10">Compatibilidade</span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          HR <span className="text-primary">2012–2022</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Peças compatíveis com Hyundai HR e Kia Bongo K2500 equipados com motor D4CB 2.5 16V Euro V e sistema de injeção Delphi CRDI.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
        {years.map((year) => (
          <div key={year} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
            <Check size={18} className="text-whatsapp" />
            <span className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">HR {year}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 text-center">
        <p className="text-sm font-medium text-foreground">
          ✅ Também compatível com <strong>Kia Bongo K2500 2.5 16V</strong> (mesmo motor e sistema de injeção)
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">* Compatibilidade pode variar conforme versão do motor. Consulte nossa equipe.</p>
    </div>
  </section>
);

export default CompatibilitySection;

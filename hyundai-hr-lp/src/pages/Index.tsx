import logo from "@/assets/logo-armazem.png";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ProductsSection from "@/components/ProductsSection";
import TrustSection from "@/components/TrustSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const relatedVehicles = [
  { name: "Amarok", url: "/injecao-diesel/amarok", available: true },
  { name: "Hilux", url: "#", available: false },
  { name: "Ranger", url: "#", available: false },
  { name: "Sprinter", url: "#", available: false },
  { name: "Kia Bongo K2500", url: "#", available: false },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-4">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><a href="https://www.armazemautopecas.com.br" className="hover:text-primary hover:underline">Início</a></li>
          <li>/</li>
          <li><span className="text-foreground/70">Injeção Diesel</span></li>
          <li>/</li>
          <li><span className="font-medium text-foreground">Hyundai HR</span></li>
        </ol>
      </nav>

      <HeroSection />
      <ProblemsSection />
      <ProductsSection />
      <TrustSection />
      <CompatibilitySection />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
            Sistema de Injeção Diesel Delphi da <span className="text-primary">Hyundai HR 2.5 16V</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              A Hyundai HR utiliza o motor D4CB 2.5 16V turbo diesel com sistema de injeção common rail Delphi (CRDI). Esse sistema foi introduzido na versão Euro V a partir de 2012, substituindo o sistema mecânico anterior. O mesmo motor e sistema de injeção equipam a Kia Bongo K2500, tornando as peças totalmente intercambiáveis entre os dois modelos.
            </p>
            <p>
              O sistema Delphi CRDI da HR trabalha com pressões de até 1.600 bar no tubo rail. Os principais componentes são: bicos injetores eletrônicos (código Delphi 28229873 / Hyundai 338004A710), bomba de alta pressão (9422A060A / 331004A700), sensor de pressão do rail (9307-528A / 28357705), válvula reguladora de pressão da bomba (2850841402) e as válvulas internas do bico injetor (9308Z625C). A válvula do bico injetor é o componente que mais apresenta falhas, principalmente pela sensibilidade à qualidade do diesel brasileiro, causando carbonização e desgaste prematuro.
            </p>
            <p>
              Na Armazém Auto Peças, trabalhamos com peças Delphi originais e compatíveis homologadas para o sistema de injeção da HR e Bongo K2500. Todas as peças possuem garantia e são testadas antes do envio. Nossa equipe técnica pode ajudar na identificação da peça correta pelo código Delphi, número Hyundai/Kia ou pelo chassi do veículo.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />

      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Peças de Injeção Diesel para Outros Veículos
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {relatedVehicles.map((v) => (
              v.available ? (
                <a key={v.name} href={v.url} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                  {v.name}
                </a>
              ) : (
                <span key={v.name} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                  {v.name}
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase">em breve</span>
                </span>
              )
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <img src={logo} alt="Armazém Auto Peças" className="mx-auto h-28 md:mx-0" />
              <p className="mt-2 text-sm text-muted-foreground">Especialistas em peças de injeção diesel</p>
            </div>
            <nav className="flex flex-col items-center gap-2 text-sm md:items-end">
              <a href="https://www.armazemautopecas.com.br" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Loja Online</a>
              <a href="https://blog.armazemautopecas.com.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">Blog — Conteúdos Técnicos</a>
              <a href="https://blog.armazemautopecas.com.br/category/injecao-diesel/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">Artigos sobre Injeção Diesel</a>
              <a href="https://www.armazemautopecas.com.br/injecao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">Todas as Peças de Injeção</a>
            </nav>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Armazém Auto Peças LTDA — CNPJ 20.195.765/0001-31 — Chapecó/SC. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import bicoInjetorImg from "@/assets/product-bico-injetor.png";
import sensorPressaoImg from "@/assets/product-sensor-pressao.png";
import reguladorImg from "@/assets/product-regulador.png";
import commonRailImg from "@/assets/product-common-rail.png";

const products = [
  {
    image: bicoInjetorImg,
    name: "Bico Injetor HR 2.5 16V Delphi",
    codes: "28229873 · 338004A710",
    description: "Bico injetor Delphi original para Hyundai HR e Kia Bongo K2500 com motor D4CB 2.5 16V Euro V (2012 em diante). Pulverização precisa e desempenho equivalente ao original.",
    alt: "Bico injetor Delphi 28229873 para Hyundai HR 2.5 16V diesel",
    whatsappMsg: "Olá, preciso de bico injetor 28229873 para Hyundai HR 2.5 16V. Pode me ajudar?",
    blogUrl: "https://blog.armazemautopecas.com.br/bico-injetor-hyundai-hr/",
    storeUrl: "https://www.armazemautopecas.com.br/bico-injetor-hyundai",
  },
  {
    image: commonRailImg,
    name: "Bomba de Alta Pressão HR 2.5 Delphi",
    codes: "9422A060A · 331004A700",
    description: "Bomba de alta pressão Delphi para sistema CRDI da HR 2.5 16V. Gera a pressão necessária para o funcionamento correto do common rail. Nova e remanufaturada disponíveis.",
    alt: "Bomba de alta pressão Delphi 9422A060A para Hyundai HR 2.5 16V diesel",
    whatsappMsg: "Olá, preciso da bomba de alta pressão 9422A060A para Hyundai HR 2.5. Pode me ajudar?",
    blogUrl: "https://blog.armazemautopecas.com.br/bomba-alta-pressao-hr/",
    storeUrl: "https://www.armazemautopecas.com.br/bomba-injetora",
  },
  {
    image: sensorPressaoImg,
    name: "Sensor de Pressão Rail HR Delphi",
    codes: "9307-528A · 28357705",
    description: "Sensor de pressão do tubo rail Delphi original. Leitura precisa da pressão do combustível para funcionamento correto da injeção eletrônica da HR e Bongo.",
    alt: "Sensor de pressão do rail Delphi 9307-528A para Hyundai HR 2.5 diesel",
    whatsappMsg: "Olá, preciso do sensor de pressão rail 9307-528A para Hyundai HR 2.5. Pode me ajudar?",
    blogUrl: "https://blog.armazemautopecas.com.br/sensor-pressao-hr/",
    storeUrl: "https://www.armazemautopecas.com.br/sensor-flauta",
  },
  {
    image: reguladorImg,
    name: "Válvula do Bico Injetor HR Delphi",
    codes: "9308Z625C · 28277576",
    description: "Válvula de controle do bico injetor Delphi Euro V. Componente que mais falha na HR por sensibilidade à qualidade do diesel. Kit com 1 ou 4 unidades disponíveis.",
    alt: "Válvula reparo bico injetor Delphi 9308Z625C para Hyundai HR 2.5 diesel",
    whatsappMsg: "Olá, preciso da válvula do bico injetor 9308Z625C para Hyundai HR 2.5. Pode me ajudar?",
    blogUrl: "https://blog.armazemautopecas.com.br/valvula-bico-injetor-hr/",
    storeUrl: "https://www.armazemautopecas.com.br/valvula-do-bico-injetor",
  },
];

const WHATSAPP_URL = "https://api.whatsapp.com/send?l=pt&phone=5549999484754&text=";

const ProductsSection = () => (
  <section id="produtos" className="bg-background py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wider text-primary">Catálogo</span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Principais Peças de <span className="text-primary">Injeção Delphi</span> para HR 2.5
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Peças de injeção diesel Delphi originais e compatíveis para Hyundai HR e Kia Bongo K2500 com motor D4CB 2.5 16V Euro V. Estoque próprio, envio em 24h.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <article key={product.name} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5">
            <div className="flex h-60 items-center justify-center overflow-hidden">
              <img src={product.image} alt={product.alt} loading="lazy" width="770" height="370" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">{product.name}</h3>
              <p className="mt-1 font-mono text-xs text-primary/70">{product.codes}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Button asChild className="flex-1 font-display uppercase tracking-wide shadow-md shadow-primary/20">
                  <a href={`${WHATSAPP_URL}${encodeURIComponent(product.whatsappMsg)}`} target="_blank" rel="noopener noreferrer">
                    Consultar preço <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 font-display uppercase tracking-wide">
                  <a href={product.storeUrl} target="_blank" rel="noopener noreferrer">
                    Ver na loja <ExternalLink className="ml-2" size={14} />
                  </a>
                </Button>
              </div>
              <a href={product.blogUrl} className="mt-3 block text-center text-xs text-primary/60 hover:text-primary hover:underline">Saiba mais sobre esta peça →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

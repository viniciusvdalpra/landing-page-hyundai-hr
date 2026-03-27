import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como saber se o bico injetor da Hyundai HR está com defeito?",
    answer: "Os principais sinais são: motor falhando em marcha lenta, consumo excessivo de diesel, fumaça preta ou branca no escape, e perda de potência especialmente com carga. A HR 2.5 16V usa bicos Delphi que são sensíveis à qualidade do diesel brasileiro. Se notar esses sintomas, verifique o sistema de injeção antes que cause danos maiores ao motor D4CB.",
  },
  {
    question: "Quais peças de injeção da HR 2.5 costumam dar problema?",
    answer: "Os componentes mais problemáticos na HR 2.5 16V são: bicos injetores Delphi (código 28229873/338004A710), válvulas do bico injetor (9308Z625C), bomba de alta pressão (9422A060A) e sensor de pressão do rail (9307-528A). A válvula do bico é o item que mais falha por causa da qualidade do diesel no Brasil.",
  },
  {
    question: "As peças servem também para Kia Bongo K2500?",
    answer: "Sim! A Hyundai HR e a Kia Bongo K2500 utilizam o mesmo motor D4CB 2.5 16V e o mesmo sistema de injeção Delphi CRDI. Todas as peças de injeção são intercambiáveis entre os dois modelos nas versões Euro V (2012 em diante).",
  },
  {
    question: "Vocês enviam peças de injeção para todo o Brasil?",
    answer: "Sim! Realizamos envios para todo o Brasil com despacho em até 24 horas após a confirmação do pagamento. Para a região Sul o prazo médio é de 2 a 4 dias úteis. Para Norte e Nordeste, de 5 a 10 dias úteis. Enviamos via transportadoras e Correios.",
  },
];

const FAQSection = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="mx-auto max-w-3xl px-6">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wider text-primary shadow-md shadow-primary/10">Dúvidas</span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-14">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base uppercase tracking-wide text-foreground hover:text-primary hover:no-underline md:text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

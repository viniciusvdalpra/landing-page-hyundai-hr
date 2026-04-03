# Landing Page — Hyundai HR 2.5 16V Sistema Delphi

Landing page de vendas de pecas de injecao diesel Delphi para **Hyundai HR 2.5 16V** (motor D4CB Euro V, 2012-2022). Desenvolvida para a **Armazem Auto Pecas LTDA** (CNPJ 20.195.765/0001-31), de propriedade de Vinicius Volmei Dal Pra — Chapeco/SC.

## Para que serve

A pagina funciona como uma vitrine tecnica e comercial focada em SEO e conversao via WhatsApp. Ela apresenta as principais pecas do sistema de injecao common rail Delphi (CRDI) para Hyundai HR e Kia Bongo K2500, direcionando o visitante a entrar em contato pelo WhatsApp ou visitar a loja online.

### Secoes da pagina

| Secao | Componente | Descricao |
|---|---|---|
| Hero | `HeroSection` | Banner principal com titulo, CTAs (ver pecas / WhatsApp) e indicadores de confianca |
| Sintomas | `ProblemsSection` | Lista de 5 sintomas comuns de falha na injecao diesel (motor falhando, perda de potencia, etc.) |
| Catalogo de Pecas | `ProductsSection` | Cards dos 4 produtos principais com codigos Delphi/Hyundai, links para WhatsApp, loja e blog |
| Diferenciais | `TrustSection` | 5 badges de confianca (envio rapido, estoque proprio, especialistas, etc.) |
| Compatibilidade | `CompatibilitySection` | Grade de anos compativeis (2012-2022) + aviso de compatibilidade com Kia Bongo K2500 |
| Conteudo SEO | *(inline em Index)* | Texto tecnico sobre o sistema Delphi CRDI do motor D4CB |
| FAQ | `FAQSection` | 4 perguntas frequentes em formato accordion com schema markup LD+JSON |
| CTA Final | `CTASection` | Chamada para acao com botoes de WhatsApp e catalogo |
| Veiculos Relacionados | *(inline em Index)* | Links para landing pages de outros veiculos (Amarok ativa, demais "em breve") |
| Footer | *(inline em Index)* | Logo, links para loja/blog e dados da empresa |
| WhatsApp Flutuante | `FloatingWhatsApp` | Botao fixo no canto inferior direito com animacao pulse |

### Produtos apresentados

- **Bico Injetor** — Delphi 28229873 / Hyundai 338004A710
- **Bomba de Alta Pressao** — Delphi 9422A060A / Hyundai 331004A700
- **Sensor de Pressao Rail** — Delphi 9307-528A / 28357705
- **Valvula do Bico Injetor** — Delphi 9308Z625C / 28277576

## Estrutura de arquivos

```
landing-page-hyundai-hr/
└── hyundai-hr-lp/                  # Projeto Vite + React
    ├── index.html                  # HTML principal com meta tags SEO, Open Graph e schema LD+JSON
    ├── package.json                # Dependencias e scripts
    ├── vite.config.ts              # Configuracao Vite (porta 8080, alias @/)
    ├── tailwind.config.ts          # Tailwind com cores customizadas (primary, whatsapp, brand-blue, greige)
    ├── tsconfig.json               # Config TypeScript
    ├── vercel.json                 # Rewrites para SPA na Vercel
    ├── vitest.config.ts            # Config de testes unitarios
    ├── playwright.config.ts        # Config de testes E2E
    ├── components.json             # Config shadcn/ui
    ├── postcss.config.js           # PostCSS (Tailwind + Autoprefixer)
    ├── eslint.config.js            # ESLint
    ├── public/
    │   ├── favicon.ico
    │   ├── placeholder.svg
    │   └── robots.txt
    └── src/
        ├── main.tsx                # Entry point React
        ├── App.tsx                 # Router (/ = Index, * = NotFound)
        ├── index.css               # CSS global, variaveis de tema, fontes Oswald + Inter
        ├── vite-env.d.ts           # Tipos Vite
        ├── assets/                 # Imagens (hero, logo, fotos de produtos)
        ├── components/
        │   ├── HeroSection.tsx     # Banner hero com CTAs
        │   ├── ProblemsSection.tsx  # Sintomas de falha na injecao
        │   ├── ProductsSection.tsx  # Catalogo de 4 produtos
        │   ├── TrustSection.tsx    # Badges de confianca
        │   ├── CompatibilitySection.tsx  # Tabela de anos compativeis
        │   ├── FAQSection.tsx      # Perguntas frequentes (accordion)
        │   ├── CTASection.tsx      # Call-to-action final
        │   ├── FloatingWhatsApp.tsx # Botao WhatsApp flutuante
        │   ├── NavLink.tsx         # Componente de navegacao
        │   └── ui/                 # ~40 componentes shadcn/ui (button, card, accordion, etc.)
        ├── hooks/
        │   ├── use-mobile.tsx      # Hook de deteccao mobile
        │   └── use-toast.ts        # Hook de notificacoes toast
        ├── lib/
        │   └── utils.ts            # Utilitario cn() (clsx + tailwind-merge)
        ├── pages/
        │   ├── Index.tsx           # Pagina principal (composicao de todas as secoes)
        │   └── NotFound.tsx        # Pagina 404
        └── test/
            ├── setup.ts            # Setup de testes
            └── example.test.ts     # Teste de exemplo
```

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| **React 18** | Biblioteca de UI |
| **TypeScript** | Tipagem estatica |
| **Vite 5** | Bundler e dev server (com plugin SWC para React) |
| **Tailwind CSS 3** | Estilizacao utility-first com tema customizado |
| **shadcn/ui** | Biblioteca de componentes (Radix UI + Tailwind) |
| **Radix UI** | Primitivos acessiveis (accordion, dialog, tooltip, etc.) |
| **React Router DOM 6** | Roteamento SPA |
| **TanStack React Query 5** | Gerenciamento de estado assincrono |
| **Lucide React** | Icones SVG |
| **Zod** | Validacao de schemas |
| **React Hook Form** | Gerenciamento de formularios |
| **Vitest** | Testes unitarios |
| **Playwright** | Testes E2E |
| **ESLint** | Linting |
| **Vercel** | Deploy (configurado via `vercel.json`) |
| **Lovable** | Plataforma de criacao inicial do projeto |

### Fontes

- **Oswald** — Titulos e headings (display font)
- **Inter** — Corpo de texto (sans-serif)

### Paleta de cores (CSS Variables)

- `--primary`: vermelho (354 80% 55%) — cor principal da marca
- `--secondary`: azul escuro (210 40% 30%) — secoes de destaque
- `--whatsapp`: verde (142 70% 45%) — botoes de WhatsApp
- `--greige`: bege acinzentado (43 16% 91%) — fundo do hero

## SEO

A pagina inclui otimizacoes de SEO:

- Meta tags `title`, `description` e `keywords` especificas para pecas de injecao diesel Hyundai HR
- Open Graph e Twitter Cards para compartilhamento em redes sociais
- Schema markup LD+JSON: `AutoPartsStore`, `FAQPage` e `BreadcrumbList`
- URL canonica: `https://www.armazemautopecas.com.br/injecao-diesel/hyundai-hr`
- `robots.txt` configurado

## Como rodar localmente

```bash
cd hyundai-hr-lp
npm install
npm run dev
```

O servidor de desenvolvimento inicia na porta **8080**.

## Scripts disponiveis

| Comando | Descricao |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de producao |
| `npm run build:dev` | Build em modo desenvolvimento |
| `npm run preview` | Preview do build de producao |
| `npm run lint` | Executa ESLint |
| `npm run test` | Executa testes unitarios (Vitest) |
| `npm run test:watch` | Testes em modo watch |

## Contato

**Armazem Auto Pecas LTDA**
CNPJ: 20.195.765/0001-31
Chapeco/SC
WhatsApp: (49) 99948-4754
Site: https://www.armazemautopecas.com.br
Blog: https://blog.armazemautopecas.com.br

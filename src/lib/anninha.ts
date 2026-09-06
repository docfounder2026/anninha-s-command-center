export const WHATSAPP_NUMBER = "5514981724854";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site e gostaria de falar sobre minha obra.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Benefícios", href: "#beneficios" },
];

export const PLANS = [
  {
    name: "ANNINHA COTA",
    subtitle: "Para quem quer comprar melhor.",
    price: "A partir de R$ 290",
    description: "Você manda a lista. A Anninha pesquisa, compara e negocia.",
    items: [
      "organização da lista",
      "pesquisa de fornecedores",
      "até 3 propostas comparáveis",
      "comparação de preços",
      "análise de prazo",
      "condições de pagamento",
      "negociação",
      "mapa comparativo",
    ],
    cta: "Quero cotar materiais",
    highlight: false,
  },
  {
    name: "ANNINHA COMPRAS",
    subtitle: "Para quem quer terceirizar as compras da obra.",
    price: "A partir de R$ 990/mês",
    description: "Você aprova. A Anninha cuida das compras.",
    items: [
      "tudo do Anninha Cota",
      "cotações recorrentes",
      "gestão de pedidos",
      "acompanhamento de entregas",
      "controle das compras",
      "organização dos valores",
      "planejamento das próximas aquisições",
      "relatório periódico",
    ],
    cta: "Quero ajuda com as compras",
    highlight: false,
  },
  {
    name: "ANNINHA GESTÃO",
    subtitle: "Para quem quer compras e acompanhamento presencial.",
    price: "A partir de R$ 1.990/mês",
    description: "Sua obra acompanhada de perto, mesmo quando você não pode estar nela.",
    items: [
      "tudo do Anninha Compras",
      "visitas programadas",
      "acompanhamento visual",
      "registro fotográfico",
      "levantamento de pendências",
      "contato operacional com prestadores",
      "relatórios periódicos",
      "organização das próximas etapas",
    ],
    cta: "Quero o plano Gestão",
    highlight: true,
    badge: "Mais escolhido",
  },
];

export const FAQ_ITEMS = [
  {
    q: "A ANNINHA é uma construtora?",
    a: "A ANNINHA CONSTRUÇÕES atua principalmente com gestão de compras e acompanhamento operacional de obras. O escopo específico depende do serviço contratado.",
  },
  {
    q: "Vocês substituem engenheiro ou arquiteto?",
    a: "Não. Atividades que exigem responsabilidade técnica devem ser executadas ou validadas pelo profissional legalmente habilitado responsável pela obra.",
  },
  {
    q: "A ANNINHA compra os materiais?",
    a: "Dependendo do plano, organizamos os pedidos após aprovação do cliente. Preferencialmente, o pagamento é feito diretamente pelo proprietário ao fornecedor.",
  },
  {
    q: "Vocês garantem o menor preço?",
    a: "Não. Pesquisamos, comparamos e negociamos buscando boas condições considerando preço, prazo, pagamento e disponibilidade.",
  },
  {
    q: "Quantos fornecedores são cotados?",
    a: "Normalmente buscamos até três propostas comparáveis por categoria, quando houver fornecedores disponíveis.",
  },
  {
    q: "Vocês acompanham entregas?",
    a: "Sim, nos planos que incluem gestão de compras, acompanhamos o status das entregas junto aos fornecedores.",
  },
  {
    q: "Quantas visitas são realizadas?",
    a: "A quantidade depende do plano contratado e da necessidade da obra.",
  },
  {
    q: "Quanto custa?",
    a: "ANNINHA COTA a partir de R$ 290, ANNINHA COMPRAS a partir de R$ 990 por mês e ANNINHA GESTÃO a partir de R$ 1.990 por mês.",
  },
];

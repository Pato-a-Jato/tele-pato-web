import type { Metadata } from "next";
import StaticCellPage, { type CellGuide } from "@/components/cells/StaticCellPage";
import { areaPhotos, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Eletrônica — Pato a Jato",
  description: "Conheça o desenvolvimento de PCBs, chicotes elétricos, sistemas embarcados, telemetria e análise de dados da Pato a Jato.",
};

function photo(file: string, alt: string): Photo {
  return {
    src: "/" + ["ELETRÔNICA/FOTOS MATHEUS", file].map(encodeURIComponent).join("/"),
    alt,
  };
}

const guide = {
  slug: "eletronica",
  index: "03",
  name: "Eletrônica",
  eyebrow: "Elétrica · Computação · Dados",
  headline: "Fazemos o protótipo medir, decidir e se comunicar.",
  summary: "Da arquitetura elétrica ao dado exibido na tela, a célula projeta PCBs, chicotes, firmware e telemetria para tornar o carro confiável, observável e inteligente.",
  hero: areaPhotos.eletronica[0],
  heroPosition: "center 38%",
  facts: [
    { value: "Hardware + software", label: "desenvolvimento integrado" },
    { value: "Do sensor à tela", label: "cadeia completa de dados" },
    { value: "Projeto + bancada", label: "simular, montar e validar" },
  ],
  overviewTitle: "A inteligência elétrica do carro.",
  overview: [
    "Eletrônica é a célula que conecta os sistemas elétricos do protótipo. Ela define como a energia é distribuída, como sensores e atuadores são ligados e como as informações chegam até a equipe.",
    "O trabalho atravessa engenharia elétrica e computação: começa no esquemático, passa pelo layout da PCB, pelo firmware e pelo chicote elétrico, e termina em testes, telemetria e análise de dados.",
    "Não é preciso chegar sabendo tudo. Um integrante pode começar em programação, circuitos, modelagem de chicote ou dados e, aos poucos, entender como essas partes formam um único sistema.",
  ],
  systemFlow: ["Sensores", "Chicote elétrico", "PCBs e firmware", "Telemetria", "Análise de dados"],
  areas: [
    {
      icon: "circuit",
      title: "Desenvolvimento de PCBs",
      description: "Criamos placas eletrônicas específicas para as necessidades do protótipo, reduzindo improvisos e organizando alimentação, aquisição de sinais e comunicação.",
      tasks: ["Levantar requisitos elétricos", "Desenhar esquemáticos", "Selecionar componentes", "Roteirizar e revisar o layout", "Montar e soldar protótipos", "Executar bring-up e testes de bancada"],
      tools: ["EDA", "Esquemáticos", "Layout de PCB", "Soldagem"],
    },
    {
      icon: "simulation",
      title: "Simulação de circuitos",
      description: "Antes de fabricar, verificamos o comportamento esperado de fontes, condicionamento de sinais, filtros e interfaces para reduzir riscos no hardware.",
      tasks: ["Modelar circuitos", "Analisar sinais e tensões", "Dimensionar componentes", "Comparar simulação e bancada"],
      tools: ["SPICE", "Instrumentação", "Datasheets", "Cálculo elétrico"],
    },
    {
      icon: "code",
      title: "Sistemas embarcados",
      description: "Programamos microcontroladores para ler sensores, tratar sinais, controlar funções do veículo e comunicar diferentes módulos eletrônicos.",
      tasks: ["Desenvolver firmware", "Implementar protocolos", "Tratar falhas e estados", "Validar o sistema no carro"],
      tools: ["C/C++", "Microcontroladores", "Comunicação serial", "Git"],
    },
    {
      icon: "cable",
      title: "Chicote elétrico",
      description: "Projetamos a rede física que interliga energia, sensores, placas e atuadores, pensando em confiabilidade, manutenção, peso e organização dentro do protótipo.",
      tasks: ["Definir a arquitetura elétrica", "Dimensionar fios e proteções", "Escolher conectores", "Modelar o roteamento em software", "Documentar pinagens", "Fabricar e testar continuidade"],
      tools: ["CAD elétrico", "Modelagem de chicote", "Diagramas", "Multímetro"],
    },
    {
      icon: "signal",
      title: "Telemetria",
      description: "Coletamos e enviamos dados do carro para que a equipe acompanhe seu comportamento durante testes e voltas de competição.",
      tasks: ["Definir variáveis relevantes", "Adquirir e transmitir dados", "Construir interfaces de visualização", "Monitorar testes em tempo real"],
      tools: ["Sensores", "Redes sem fio", "Dashboards", "APIs"],
    },
    {
      icon: "chart",
      title: "Análise de dados",
      description: "Transformamos medições em informação útil para diagnosticar problemas, comparar configurações e apoiar decisões de eficiência.",
      tasks: ["Limpar e organizar dados", "Comparar voltas e testes", "Criar gráficos e indicadores", "Comunicar conclusões para a equipe"],
      tools: ["Python", "Planilhas", "Visualização", "Estatística"],
    },
  ],
  workflow: [
    { title: "Entender", text: "Mapeamos a necessidade do carro, as entradas, as saídas e as condições de operação.", output: "Requisitos e arquitetura" },
    { title: "Projetar", text: "Desenvolvemos esquemáticos, PCB, firmware, diagramas e o modelo do chicote.", output: "Projeto revisado" },
    { title: "Prototipar", text: "Montamos placas, cabos e código em bancada para verificar cada função isoladamente.", output: "Protótipo funcional" },
    { title: "Integrar e medir", text: "Instalamos no veículo, testamos em condições reais e usamos os dados para melhorar a próxima versão.", output: "Sistema validado" },
  ],
  learning: [
    "Projetar uma placa desde o requisito até a montagem.",
    "Ler datasheets e dimensionar componentes eletrônicos.",
    "Programar microcontroladores e integrar sensores.",
    "Documentar e modelar um chicote elétrico automotivo.",
    "Criar telemetria e transformar medições em decisões.",
  ],
  profile: [
    "Você gosta de entender como hardware e software conversam.",
    "Tem curiosidade por circuitos, programação ou automação.",
    "Gosta de investigar falhas com método e paciência.",
    "Quer aprender a construir sistemas confiáveis para uso real.",
    "Se interessa por dados, dashboards e desempenho do veículo.",
  ],
  gallery: [
    areaPhotos.eletronica[1],
    photo("2025-03-21 at 14.04.40.jpeg", "Integrante desenvolvendo soluções de computação para o protótipo"),
    photo("Image 2025-03-21 at 13.55.52.jpeg", "Trabalho da célula de Eletrônica na base da Pato a Jato"),
    photo("Image 2025-03-21 at 14.04.13.jpeg", "Programação e validação dos sistemas eletrônicos do veículo"),
    photo("2025-03-21 at 14.04.43.jpeg", "Desenvolvimento colaborativo na bancada de Eletrônica"),
  ],
  next: { name: "Administração", slug: "administracao" },
} satisfies CellGuide;

export default function ElectronicsPage() {
  return <StaticCellPage guide={guide} />;
}

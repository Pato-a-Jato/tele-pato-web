import type { Metadata } from "next";
import StaticCellPage, { type CellGuide } from "@/components/cells/StaticCellPage";
import { areaPhotos, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Powertrain — Pato a Jato",
  description: "Conheça o trabalho da célula de Powertrain com motor, transmissão, calibração, manutenção e eficiência energética.",
};

function photo(file: string, alt: string): Photo {
  return { src: "/" + ["POWERTRAIN", file].map(encodeURIComponent).join("/"), alt };
}

const guide = {
  slug: "powertrain",
  index: "01",
  name: "Powertrain",
  eyebrow: "Motor · Transmissão · Eficiência",
  headline: "Transformamos combustível em movimento com o mínimo de perdas.",
  summary: "A célula desenvolve, mantém e calibra o conjunto de propulsão para que motor e transmissão entreguem confiabilidade e a melhor eficiência possível.",
  hero: areaPhotos.powertrain[0],
  heroPosition: "center 48%",
  facts: [
    { value: "Motor a etanol", label: "fonte de energia do protótipo" },
    { value: "Bancada + pista", label: "hipóteses validadas na prática" },
    { value: "Cada gota conta", label: "eficiência como objetivo" },
  ],
  overviewTitle: "Onde a energia vira movimento.",
  overview: [
    "Powertrain é responsável pelo sistema que impulsiona o protótipo. A célula trabalha no motor, na alimentação de combustível, na ignição e na transmissão para entregar somente a energia necessária em cada momento.",
    "O trabalho combina mecânica automotiva, termodinâmica, fabricação, instrumentação e análise. Uma melhoria pode nascer de uma manutenção bem executada, de uma nova peça, de uma relação de transmissão ou de uma calibração mais precisa.",
    "A confiabilidade vem antes da eficiência: o carro precisa ligar, responder de forma previsível e completar a prova para que cada otimização faça sentido.",
  ],
  systemFlow: ["Combustível", "Admissão e ignição", "Motor", "Transmissão", "Roda"],
  areas: [
    {
      icon: "engine",
      title: "Motor e combustão",
      description: "Estudamos o funcionamento do motor e os fenômenos que influenciam torque, consumo, temperatura e confiabilidade.",
      tasks: ["Inspecionar componentes internos", "Avaliar compressão e vedação", "Preparar o motor", "Relacionar condição mecânica e consumo"],
      tools: ["Mecânica automotiva", "Termodinâmica", "Metrologia"],
    },
    {
      icon: "spark",
      title: "Injeção e ignição",
      description: "Ajustamos combustível e centelha para que o motor opere de maneira estável e eficiente nas condições de pista.",
      tasks: ["Construir mapas de injeção", "Ajustar parâmetros de ignição", "Interpretar sinais do motor", "Comparar calibrações"],
      tools: ["ECU", "Calibração", "Sensores", "Mapas"],
    },
    {
      icon: "gears",
      title: "Transmissão",
      description: "Dimensionamos a transferência de torque entre motor e roda para manter o conjunto na região mais eficiente de funcionamento.",
      tasks: ["Definir relações de transmissão", "Avaliar perdas mecânicas", "Projetar suportes e elementos", "Alinhar e tensionar o conjunto"],
      tools: ["Elementos de máquinas", "CAD", "Fabricação"],
    },
    {
      icon: "wrench",
      title: "Manutenção e diagnóstico",
      description: "Identificamos falhas e mantemos o conjunto pronto para testes e competição, com procedimentos e registros confiáveis.",
      tasks: ["Executar manutenção preventiva", "Diagnosticar falhas", "Aplicar soluções corretivas", "Documentar intervenções"],
      tools: ["Oficina", "Instrumentação", "Checklist", "Análise de causa"],
    },
    {
      icon: "gauge",
      title: "Testes de desempenho",
      description: "Planejamos testes para entender como cada alteração muda consumo, resposta e comportamento do protótipo.",
      tasks: ["Definir hipóteses", "Controlar condições de teste", "Registrar resultados", "Comparar configurações"],
      tools: ["Plano de testes", "Aquisição de dados", "Gráficos"],
    },
    {
      icon: "leaf",
      title: "Eficiência energética",
      description: "Integramos calibração, transmissão e estratégia de condução para aproveitar melhor a energia disponível durante a prova.",
      tasks: ["Estimar consumo", "Estudar pontos de operação", "Apoiar a estratégia burn-and-coast", "Converter dados em ajustes"],
      tools: ["Modelagem", "Dados de pista", "Indicadores", "Estratégia"],
    },
  ],
  workflow: [
    { title: "Diagnosticar", text: "Entendemos o estado do conjunto e identificamos o problema ou oportunidade de eficiência.", output: "Hipótese técnica" },
    { title: "Projetar", text: "Calculamos, modelamos e escolhemos a solução mais adequada ao regulamento e ao carro.", output: "Solução dimensionada" },
    { title: "Preparar", text: "Fabricamos, montamos, ajustamos e documentamos o conjunto antes de colocá-lo em operação.", output: "Powertrain pronto" },
    { title: "Testar e otimizar", text: "Comparamos dados de bancada e pista e usamos os resultados na próxima calibração.", output: "Configuração validada" },
  ],
  learning: [
    "Compreender o funcionamento real de um motor a combustão.",
    "Diagnosticar falhas e planejar manutenção.",
    "Projetar componentes e sistemas de transmissão.",
    "Calibrar injeção e ignição com base em dados.",
    "Planejar testes e avaliar eficiência energética.",
  ],
  profile: [
    "Você gosta de desmontar, entender e montar mecanismos.",
    "Tem interesse por motores, veículos ou termodinâmica.",
    "Gosta de testar hipóteses e comparar resultados.",
    "É cuidadoso com procedimentos, segurança e organização.",
    "Quer unir cálculo, oficina e decisões de pista.",
  ],
  gallery: [
    photo("WhatsApp Image 2025-05-27 at 12.46.38 (3).jpeg", "Manutenção de componentes do powertrain na oficina"),
    photo("IMG_9345.jpg", "Integrantes trabalhando no conjunto mecânico do protótipo"),
    areaPhotos.powertrain[1],
    photo("IMG_9780.PNG", "Detalhes do conjunto motriz durante a preparação do protótipo"),
    photo("WhatsApp Image 2025-05-27 at 12.46.37.jpeg", "Montagem e inspeção dos componentes do powertrain"),
  ],
  next: { name: "Estrutura", slug: "estrutura" },
} satisfies CellGuide;

export default function PowertrainPage() {
  return <StaticCellPage guide={guide} />;
}

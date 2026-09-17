export const team = {
  name: "Pato a Jato",
  fullName: "Equipe Pato a Jato",
  university: "UTFPR — Universidade Tecnológica Federal do Paraná",
  campus: "Câmpus Pato Branco",
  founded: 2009,
  tagline: "Eficiência que atravessa gerações",
  description:
    "Equipe multidisciplinar da UTFPR que projeta, fabrica e pilota protótipos movidos a etanol para transformar conhecimento em eficiência energética.",
  email: "patoajato.rh@gmail.com",
  instagram: "https://www.instagram.com/patoajato/",
};

export const highlights = [
  { value: "768", unit: "km/L", label: "recorde registrado em 2023" },
  { value: "16+", unit: "anos", label: "de engenharia na prática" },
  { value: "4×", unit: "Brasil", label: "campeã nacional" },
  { value: "2×", unit: "Américas", label: "vice-campeã continental" },
] as const;

export const milestones = [
  {
    year: "2009",
    title: "Nasce a Pato a Jato",
    text: "A equipe é fundada na UTFPR Pato Branco sob coordenação do professor Genaro Marcial Mamani Gilapa e orientação de Marcio Tadayuki Nakaura.",
    tag: "Fundação",
  },
  {
    year: "2010",
    title: "Primeiro protótipo",
    text: "O E Daí estreia na Maratona Brasileira de Eficiência Energética e registra 82 km/L de etanol.",
    tag: "E Daí",
  },
  {
    year: "2013",
    title: "Primeiro pódio",
    text: "O protótipo UTEFI conquista o terceiro lugar nacional na categoria etanol com chassi em aço e carenagem de fibra de vidro.",
    tag: "108 km/L",
  },
  {
    year: "2014",
    title: "Dois vice-campeonatos",
    text: "Popygua e Paranauê levam a equipe ao segundo lugar nas categorias gasolina e etanol e abrem as portas para competir fora do país.",
    tag: "Brasil",
  },
  {
    year: "2015",
    title: "Pódio nas Américas",
    text: "Em Detroit, o Popygua com injeção eletrônica programável alcança 316 km/L e o vice-campeonato em combustíveis alternativos.",
    tag: "Detroit",
  },
  {
    year: "2016",
    title: "Salto em materiais",
    text: "Surge um protótipo de 39 kg com estrutura monocoque em fibra de carbono, motor a etanol e injeção programável.",
    tag: "39 kg",
  },
  {
    year: "2017",
    title: "Campeã brasileira",
    text: "A equipe vence a categoria etanol com 412,4 km/L e ainda conquista o segundo lugar na categoria gasolina.",
    tag: "412,4 km/L",
  },
  {
    year: "2018",
    title: "Recordes e bicampeonato",
    text: "Registra 523 km/L nos Estados Unidos e 443,7 km/L no Rio de Janeiro, tornando-se bicampeã brasileira no etanol.",
    tag: "523 km/L",
  },
  {
    year: "2019",
    title: "Design premiado",
    text: "Em Sonoma, conquista o Design Award da Shell Eco-marathon Americas — resultado inédito para uma equipe brasileira.",
    tag: "Design Award",
  },
  {
    year: "2021–22",
    title: "Resiliência e retomada",
    text: "É vice-campeã do Safety Award em 2021 e volta à pista em 2022 para vencer a categoria de combustão interna com 620 km/L.",
    tag: "620 km/L",
  },
  {
    year: "2023",
    title: "A temporada dos 768 km/L",
    text: "Vice-campeã das Américas com recorde de 768 km/L, a equipe também vence Inovação Técnica e Segurança e fica em segundo em Telemetria.",
    tag: "4 pódios",
  },
  {
    year: "2024–25",
    title: "Evolução contínua",
    text: "Conquista dois vice-campeonatos seguidos no Brasil: 509 km/L em 2024 e 521 km/L em 2025, formando uma nova geração de integrantes.",
    tag: "Nova geração",
  },
] as const;

export const areas = [
  {
    slug: "powertrain",
    index: "01",
    name: "Powertrain",
    summary:
      "Desenvolve motor, transmissão e eficiência energética para garantir desempenho, confiabilidade e o melhor aproveitamento de energia.",
    tracks: ["Powertrain", "Eficiência energética"],
    skills: ["Mecânica automotiva", "Diagnóstico", "Testes"],
  },
  {
    slug: "estrutura",
    index: "02",
    name: "Estrutura",
    summary:
      "Projeta carenagens, sistema de frenagem e soluções para a segurança do piloto com foco em leveza e eficiência.",
    tracks: ["Estrutural", "Aerodinâmica", "Materiais"],
    skills: ["Modelagem 3D", "Simulação", "Compósitos"],
  },
  {
    slug: "eletronica",
    index: "03",
    name: "Eletrônica",
    summary:
      "Integra sensores, microcontroladores, circuitos e telemetria aos sistemas elétricos e eletrônicos do protótipo.",
    tracks: ["Elétrica do carro", "Eletrônica", "Telemetria"],
    skills: ["Microcontroladores", "Circuitos", "PCB"],
  },
  {
    slug: "administracao",
    index: "04",
    name: "Administração",
    summary:
      "Organiza pessoas, recursos e comunicação para sustentar o desenvolvimento da equipe dentro e fora da pista.",
    tracks: ["Marketing", "Recursos Humanos", "Financeiro"],
    skills: ["Mídias", "Patrocínios", "Gestão"],
  },
] as const;

export const generations = [
  {
    period: "Fundação",
    label: "Professores que iniciaram e consolidaram o projeto",
    members: [
      { name: "Genaro Marcial Mamani Gilapa", course: "Coordenação fundadora" },
      { name: "Marcio Tadayuki Nakaura", course: "Orientação fundadora" },
      { name: "Luiz Carlos Martinelli Junior", course: "Coordenação" },
      { name: "Bruno Bellini Medeiros", course: "Coordenação" },
    ],
  },
  {
    period: "Geração 2023",
    label: "Integrantes registrados pela UTFPR na temporada 2023",
    members: [
      { name: "Anderson Rabaioli", course: "Engenharia Mecânica" },
      { name: "Arthur Lima Leite da Silva", course: "Engenharia Mecânica" },
      { name: "Eduarda M. Glienke", course: "Engenharia Mecânica" },
      { name: "Gabriel Ferracini Salim Saad", course: "Engenharia Mecânica" },
      { name: "Gabriel Paulichen", course: "Engenharia Mecânica" },
      { name: "Gustavo Marquezotti Caldato", course: "Engenharia Mecânica" },
      { name: "Henrique Cesar Cesco", course: "Engenharia Mecânica" },
      { name: "Jean Lorenzini", course: "Engenharia Mecânica" },
      { name: "João Pedro S. Bassi", course: "Engenharia Mecânica" },
      { name: "Lamartini Scaion", course: "Engenharia Mecânica" },
      { name: "Laura F. Martins", course: "Engenharia Mecânica" },
      { name: "Ramys B. da Costa", course: "Engenharia Mecânica" },
      { name: "Admir Baggio Júnior", course: "Engenharia Elétrica" },
      { name: "João Pedro V. da Silva", course: "Engenharia Elétrica" },
      { name: "João Vitor Ogliari", course: "Engenharia Elétrica" },
      { name: "José Lucas M. Stanqueviski", course: "Engenharia Elétrica" },
      { name: "Vinícius F. Pacheco", course: "Engenharia Elétrica" },
      { name: "Maria Fernanda da Silva", course: "Engenharia Civil" },
      { name: "Victor Hugo Soares", course: "Engenharia Civil" },
      { name: "Guilherme R. dos Santos", course: "Engenharia de Computação" },
      { name: "Luiz Eduardo C. Kramer", course: "Engenharia de Computação" },
      { name: "Matheus Deodato Cadamuro", course: "Engenharia de Computação" },
      { name: "Satil P. dos Santos Neto", course: "Engenharia de Computação" },
      { name: "Natacha M. Rigo", course: "Engenharia Cartográfica" },
      { name: "Andrielly B. da Silva", course: "Administração" },
      { name: "Larissa Victória P. F. Bastos", course: "Letras" },
    ],
  },
  {
    period: "Geração 2024",
    label: "Novos nomes registrados na delegação de 2024",
    members: [
      { name: "Sthefany Keren Tomasi Pinheiro", course: "Engenharia Civil" },
      { name: "Marcos Vinícius Schiavini", course: "Engenharia Mecânica" },
      { name: "João Pedro Detoni Risso", course: "Engenharia Mecânica" },
      { name: "Felipe Dalmolin", course: "Engenharia Elétrica" },
      { name: "Amarildo Piovesan Júnior", course: "Engenharia de Computação" },
      { name: "Lucas Luiz Boaretto", course: "Engenharia de Computação" },
    ],
  },
] as const;

export const sponsors = [
  {
    name: "UTFPR",
    role: "Instituição de ensino",
    kind: "education",
    image: {
      src: "/POWERTRAIN/IMG_9647.jpg",
      alt: "Estudantes trabalhando na oficina da Pato a Jato na UTFPR",
    },
  },
  {
    name: "Injepro",
    role: "Tecnologia em injeção",
    kind: "technology",
    image: {
      src: "/Injepro/981374f9-cd91-412c-8a21-d85e1d7465bc.jpg",
      alt: "Sistema de instrumentação Injepro instalado no protótipo",
    },
  },
  {
    name: "Shell Eco-marathon",
    role: "Competição internacional",
    kind: "competition",
    image: {
      src: "/FOTOS%20SHELL/CPN-4843-MBD5-1722.jpg",
      alt: "Equipe comemorando uma conquista na Shell Eco-marathon Americas",
    },
  },
] as const;

export const sources = [
  {
    label: "Histórico e protótipos — Pato a Jato / UTFPR",
    href: "https://www.pb.utfpr.edu.br/patoajato/",
  },
  {
    label: "Resultados e integrantes de 2023 — UTFPR",
    href: "https://www.utfpr.edu.br/noticias/pato-branco/pato-a-jato-4",
  },
  {
    label: "Shell Eco-marathon Brasil 2023 — Shell",
    href: "https://www.shellecomarathon.com/about/previous-seasons/2023-programme-on-track/challenger-brazil.html",
  },
  {
    label: "Resultados e integrantes de 2024 — UTFPR",
    href: "https://www.utfpr.edu.br/noticias/pato-branco/pato-a-jato-na-shell-eco-marathon-brasil-2024",
  },
  {
    label: "Pódios da Shell Eco-marathon 2025 — UTFPR",
    href: "https://www.utfpr.edu.br/noticias/geral/tamo-junto/tres-times-da-utfpr-conquistam-podio-na-shell-eco-marathon-2025",
  },
] as const;

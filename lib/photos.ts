export type Photo = {
  src: string;
  alt: string;
};

function photo(folder: string, file: string, alt: string): Photo {
  const src = "/" + [folder, file].map(encodeURIComponent).join("/");
  return { src, alt };
}

export const heroPhoto = photo(
  "FOTOS SHELL",
  "CPN-4843FSD2 (1806).jpg",
  "Integrantes da Pato a Jato conduzindo o protótipo na Shell Eco-marathon Brasil",
);

export const historyPhotos: Photo[] = [
  photo(
    "ELETRÔNICA/FOTOS MATHEUS",
    "2025-03-21 at 13.55.53.jpeg",
    "Integrante da equipe com o uniforme e a caneca do Pato a Jato, com o mural de prêmios da Shell Eco-marathon ao fundo",
  ),
  photo(
    "FOTOS SHELL",
    "CPN-4843-MBD5-1722.jpg",
    "Equipe Pato a Jato comemorando o Technical Innovation Award na Shell Eco-marathon Americas 2023, em Indianapolis",
  ),
  photo(
    "ExpoPato 2025",
    "IMG_20251115_170740.jpg",
    "Público interagindo com o protótipo durante a ExpoPato 2025",
  ),
];

export const areaPhotos: Record<string, Photo[]> = {
  estrutura: [
    photo("ESTRUTURA", "IMG_6003.jpg", "Fabricação do monocoque em fibra de carbono da equipe"),
    photo("ESTRUTURA", "IMG_5952.jpg", "Montagem da roda e do freio do protótipo"),
  ],
  powertrain: [
    photo(
      "POWERTRAIN",
      "WhatsApp Image 2025-05-27 at 12.46.29.jpeg",
      "Trabalho no sistema de injeção e alimentação de combustível do motor",
    ),
    photo(
      "POWERTRAIN",
      "IMG_9647.jpg",
      "Equipe reunida na oficina, com o desenho da logo Pato a Jato feito à giz na parede",
    ),
  ],
  eletronica: [
    photo(
      "ELETRÔNICA/FOTOS MATHEUS",
      "2025-03-21 at 14.04.16.jpeg",
      "Desenvolvimento de software embarcado no notebook da equipe",
    ),
    photo(
      "ELETRÔNICA/FOTOS MATHEUS",
      "2025-03-21 at 14.04.36.jpeg",
      "Bancada de eletrônica da equipe Pato a Jato",
    ),
  ],
  administracao: [
    photo(
      "FOTOS SHELL",
      "CPN-4843-MBD5-1722.jpg",
      "Equipe Pato a Jato comemorando uma conquista na Shell Eco-marathon",
    ),
    photo(
      "ExpoPato 2025",
      "IMG_20251115_165617.jpg",
      "Estande da equipe durante a ExpoPato 2025",
    ),
  ],
};

export const galleryPhotos: Photo[] = [
  photo("7 de setembro 2025", "IMG_2349.jpg", "Desfile de 7 de setembro com o protótipo da equipe"),
  photo("7 de setembro 2025", "IMG_2373.jpg", "Protótipo exposto nas ruas durante o desfile cívico"),
  photo("7 de setembro 2025", "IMG_2325.jpg", "Equipe apresentando o carro à comunidade no 7 de setembro"),
  photo("ExpoPato 2025", "IMG_20251115_165617.jpg", "Estande da equipe na ExpoPato 2025"),
  photo("ExpoPato 2025", "IMG_20251115_165427.jpg", "Visitantes conhecendo o protótipo na ExpoPato 2025"),
  photo("ExpoPato 2025", "IMG_20251115_170007.jpg", "Detalhe do protótipo exposto na ExpoPato 2025"),
  photo("FOTOS SHELL", "CPN-4843-MBD5-1790.jpg", "Equipe na Shell Eco-marathon Americas"),
  photo("FOTOS SHELL", "CPN_5638AMD2_2190.jpg", "Protótipo em pista durante a Shell Eco-marathon"),
  photo("Injepro", "981374f9-cd91-412c-8a21-d85e1d7465bc.jpg", "Visita técnica ao patrocinador Injepro"),
  photo("Injepro", "34b20851-9f73-4359-a19a-0cb1780a957b.jpg", "Sistema de injeção eletrônica desenvolvido com a Injepro"),
];

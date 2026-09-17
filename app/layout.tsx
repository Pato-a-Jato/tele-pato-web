import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pato a Jato — UTFPR Pato Branco",
  description:
    "Equipe de competição da UTFPR de Pato Branco na Shell Eco-marathon. Conheça a história, as áreas de trabalho e o sistema de telemetria do protótipo Pato a Jato.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

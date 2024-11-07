import type { Metadata } from "next";
import "./globals.css";
import Header from './components/header/header'

export const metadata: Metadata = {
  title: "Agendamento de Salas",
  description: "Crie, liste e reserve suas salas de uma forma simples e rápida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

import { Footer } from "@/src/shared/footer";
import { Header } from "@/src/shared/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лига Спас - поисково-спасательный отряд",
  description:
    "Пропал человек. Поиск детей. Поиск людей. Хабаровск. Добровольческий поисково-спасательный отряд «Лига Спас», отделение Национального центра помощи пропавшим и пострадавшим детям. Хабаровский край и ЕАО.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-orange-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
          {children}
        </div>
      </main>
      <Footer />
    </body>
  );
}

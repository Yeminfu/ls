import type { Metadata } from "next";
import { TeamSlider } from "@/src/shared/team-slider";
import { Cause } from "./components/cause";
import { CAUSES } from "./data/causes.data";

export const metadata: Metadata = {
  title: "Лига Спас — Добровольческий поисково-спасательный отряд",
  description:
    "Официальный сайт ДПСО «Лига Спас». Направления деятельности, помощь, волонтёрство.",
  icons: {
    icon: "/logo.ico",
    apple: "/images/icon.jpg",
  },
};

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 px-6 py-10 text-white shadow-2xl lg:px-16 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_30%)]" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-black leading-tight lg:text-7xl">
            Помогаем находить людей и спасать жизни
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            «Лига Спас» — команда добровольцев, координаторов и специалистов,
            которые ежедневно участвуют в поисково-спасательных операциях и
            помогают людям в критических ситуациях.
          </p>

          {/* <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-orange-600 shadow-xl transition hover:scale-[1.02] hover:bg-orange-50">
              Сообщить о пропаже
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Стать волонтёром
            </button>
          </div> */}
        </div>
      </section>

      <section
        aria-label="Направления деятельности"
        className="scroll-mt-20 py-20"
      >
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Направления
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              Чем мы занимаемся
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSES.map((cause, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Cause cause={cause} />
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Команда" className="scroll-mt-20 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Команда
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Люди, которые спасают жизни
          </h2>
        </div>

        <TeamSlider />
      </section>

      {/* <section className="py-24">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 px-8 py-16 text-center text-white shadow-2xl sm:px-16">
          <h3 className="text-4xl font-black">
            Каждая минута может спасти жизнь
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Присоединяйтесь к поисково-спасательному отряду, поддержите нас
            финансово или станьте волонтёром. Вместе мы можем больше.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:scale-[1.02] hover:bg-blue-50">
              Связаться с нами
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Поддержать отряд
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

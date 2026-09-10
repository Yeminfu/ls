import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaOdnoklassniki, FaTelegramPlane, FaVk } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// TODO: уточнить актуальные контакты организации
const CONTACTS = {
  phone: "+7 914 167 37 77",
  phoneHref: "tel:+79141673777",
  email: "info@ligaspas.ru", // TODO: актуальный e-mail
  emailHref: "mailto:info@ligaspas.ru",
  address: "г. Хабаровск", // TODO: точный юридический адрес
};

// Официальный логотип мессенджера MAX (VK), упрощённый до моноцвета фирменного синего
function MaxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 1000" className={className}>
      <rect width="1000" height="1000" fill="#471aFF" ry="249.681" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const SOCIALS = [
  { label: "ВКонтакте", href: "https://vk.com/ligaspas", Icon: FaVk, color: "#0077FF" },
  { label: "Одноклассники", href: "https://ok.ru/ligaspas", Icon: FaOdnoklassniki, color: "#EE8208" },
  { label: "Telegram", href: "https://t.me/ligaspas", Icon: FaTelegramPlane, color: "#229ED9" },
  { label: "Max", href: "https://max.ru/id2724250231_biz", Icon: MaxIcon, color: undefined },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Левая колонка: информация о разработчиках (доработать) */}
        <div className="text-sm leading-relaxed">
          {/*
            TODO: доработать блок с информацией о разработчиках.
            Раскомментировать, когда появятся актуальные данные.

            <p className="mb-3 font-bold uppercase tracking-wide text-white">
              Разработка сайта
            </p>
            <p>
              Сайт разработан командой волонтёров. По вопросам о сайте,
              предложениям и сообщениям об ошибках пишите на{" "}
              <a
                href="mailto:dev@ligaspas.ru"
                className="text-orange-400 transition-colors hover:text-orange-300"
              >
                dev@ligaspas.ru
              </a>
              .
            </p>
          */}
        </div>

        {/* Центр: логотип отряда */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Логотип Лига Спас"
              width={120}
              height={120}
              className="rounded-full border-4 border-white/10 bg-white shadow-lg"
            />
          </Link>

          <p className="mt-4 text-xl font-black tracking-tight text-white">
            Лига Спас
          </p>

          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Помощь • Поиск • Спасение
          </p>
        </div>

        {/* Правая колонка: контакты */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
            Контакты
          </p>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={CONTACTS.phoneHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-orange-400"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-orange-400" />
                <span className="font-semibold text-slate-200">
                  {CONTACTS.phone}
                </span>
              </a>
            </li>

            <li>
              <a
                href={CONTACTS.emailHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-orange-400"
              >
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-orange-400" />
                <span className="break-all text-slate-200">
                  {CONTACTS.email}
                </span>
              </a>
            </li>

            <li>
              <span className="inline-flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-orange-400" />
                <span>{CONTACTS.address}</span>
              </span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 transition-all hover:-translate-y-0.5 hover:border-orange-400"
              >
                <Icon className="h-5 w-5" style={color ? { color } : undefined} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} ДПСО «Лига Спас»</p>
          <p>Хабаровский край и ЕАО</p>
        </div>
      </div>
    </footer>
  );
}
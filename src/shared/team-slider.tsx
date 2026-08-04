"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import type { ts_teammate } from "@/src/app/(public)/(home)/types/team.interface";
import { VolunteerCard } from "@/src/shared/volunteer-card";

const VOLUNTEER: ts_teammate = {
  name: "Ольга Щукина, позывной «Ёлка»",
  description:
    "Руководитель ДПСО «Лига Спас», региональный директор Национального центра помощи детям в ДФО. Моя задача — эффективная команда, где каждый поисковик ценен и важен, где каждый знает, ради чего он в отряде. У отряда есть поддержка, это наши семьи, это люди, которые выходят с нами в поиски, которые делают репосты ориентировок. Спасибо каждому за эту бесценную помощь.",
  image: "/team/68397240.jpg",
};

const VOLUNTEERS: ts_teammate[] = Array.from({ length: 8 }, () => ({
  ...VOLUNTEER,
}));

export function TeamSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByView = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VOLUNTEERS.map((volunteer, i) => (
          <div
            key={i}
            className="w-full shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <VolunteerCard volunteer={volunteer} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByView(-1)}
        aria-label="Предыдущие волонтёры"
        className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition hover:text-orange-600 sm:-left-5"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollByView(1)}
        aria-label="Следующие волонтёры"
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition hover:text-orange-600 sm:-right-5"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

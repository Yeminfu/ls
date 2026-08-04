"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { TEAM } from "@/src/app/(public)/(home)/data/team.data";
import { VolunteerCard } from "@/src/shared/volunteer-card";

export function TeamSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
     const scrollByView = (direction: 1 | -1) => {                                                 
       const track = trackRef.current;                                                             
       if (!track) return;                                                                         
       const cards = Array.from(track.children) as HTMLElement[];                                  
       if (!cards.length) return;                                                                  
                                                                                                   
       const step = cards[0].offsetWidth + 24; // gap-6 = 24px                                     
       const current = Math.round(track.scrollLeft / step);                                        
       const next = Math.max(0, Math.min(cards.length - 1, current + direction));                  
                                                                                                   
       track.style.scrollSnapType = "none"; // ключевое: убрать snap на время скролла              
       track.scrollTo({ left: next * step, behavior: "smooth" });                                  
       track.addEventListener(                                                                     
         "scrollend",                                                                              
         () => { track.style.scrollSnapType = ""; },                                               
         { once: true }                                                                            
       );                                                                                          
     };           

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TEAM.map((volunteer, i) => (
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
        className="absolute left-2 top-[280px] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition hover:text-orange-600 sm:-left-5"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollByView(1)}
        aria-label="Следующие волонтёры"
        className="absolute right-2 top-[280px] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600  shadow-lg transition hover:text-orange-600 sm:-right-5" >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

import Image from "next/image";
import type { ts_teammate } from "@/src/app/(public)/(home)/types/team.interface";

interface VolunteerCardProps {
  volunteer: ts_teammate;
}

export function VolunteerCard({ volunteer }: VolunteerCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-hidden">
        <Image
          src={volunteer.image}
          alt={volunteer.name}
          width={600}
          height={320}
          className="h-[280px] w-full object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">{volunteer.name}</h3>

        <p className="mt-4 leading-7 text-slate-600">{volunteer.description}</p>
      </div>
    </article>
  );
}

import { Laptop, Code2, Layers, Rocket, MessageSquare, Award } from "lucide-react";
import { OUTCOMES } from "@/data/site";

const ICONS = { laptop: Laptop, code: Code2, layers: Layers, rocket: Rocket, message: MessageSquare, award: Award };

export default function Outcomes() {
  return (
    <section id="learn" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold text-deep md:text-4xl">কোর্স শেষে আপনি পাবেন</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OUTCOMES.map(([icon, title, text]) => {
          const Icon = ICONS[icon];
          return (
            <article key={title} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lav text-royal transition group-hover:bg-royal group-hover:text-white"><Icon size={24} /></span>
              <h3 className="mt-4 text-xl font-semibold text-deep">{title}</h3>
              <p className="mt-1 text-ink/65">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { ChevronDown } from "lucide-react";
import { MODULES } from "@/data/site";
import { bn } from "@/lib/format";

export default function Syllabus() {
  return (
    <section id="syllabus" className="bg-lav py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-bold text-deep md:text-4xl">সিলেবাস</h2>
        <p className="mt-2 text-ink/60">৫টি মডিউলে মোট প্রায় ১৪ সপ্তাহ।</p>
        <div className="mt-8 space-y-3">
          {MODULES.map((m, i) => (
            <details key={m.title} className="group rounded-2xl bg-white shadow-sm ring-1 ring-ink/5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal font-display text-lg font-bold text-white">{bn(i + 1)}</span>
                <span className="flex-1"><span className="block font-semibold text-deep">{m.title}</span><span className="text-sm text-ink/55">{m.weeks}</span></span>
                <ChevronDown size={20} className="shrink-0 text-royal transition group-open:rotate-180" />
              </summary>
              <ul className="space-y-2 border-t border-ink/5 px-5 pb-5 pt-4 pl-[4.5rem]">
                {m.lessons.map((l) => <li key={l} className="list-disc text-ink/75">{l}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

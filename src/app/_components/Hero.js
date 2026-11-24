import { Sparkles } from "lucide-react";
import { COURSE } from "@/data/site";
import { taka } from "@/lib/format";

const CODE = [
  ["const", "skill", '"web development"'],
  ["const", "projects", "5"],
  ["deploy", "portfolio", "live()"],
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-deep via-royal to-violet-700 text-white">
      <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-flame/30 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-32 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20 backdrop-blur">
            <Sparkles size={16} className="text-amber-300" /> ভর্তি চলছে, আসন সীমিত
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.15] md:text-6xl">
            ওয়েব ডেভেলপমেন্ট শিখে শুরু করুন <span className="text-amber-300">নিজের ফ্রিল্যান্সিং</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/80">
            {COURSE.months} হাতে-কলমে কোর্স। Next.js, Laravel ও ক্লায়েন্ট হ্যান্ডলিং, শূন্য থেকে ধাপে ধাপে।
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#admission" className="rounded-full bg-flame px-8 py-4 text-lg font-semibold shadow-lg shadow-black/20 transition hover:bg-flame-dark">এখনই ভর্তি হন</a>
            <p className="text-white/80"><b className="text-2xl text-white">{taka(COURSE.price)}</b> <s className="text-white/50">{taka(COURSE.old)}</s></p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md" aria-hidden="true">
          <div className="rounded-3xl bg-ink/80 p-5 font-mono text-sm shadow-2xl ring-1 ring-white/15 backdrop-blur">
            <div className="flex gap-2"><i className="h-3 w-3 rounded-full bg-rose-400" /><i className="h-3 w-3 rounded-full bg-amber-300" /><i className="h-3 w-3 rounded-full bg-emerald-400" /></div>
            <div className="mt-5 space-y-2">
              {CODE.map(([k, v, val]) => (
                <p key={v}><span className="text-violet-300">{k}</span> <span className="text-sky-300">{v}</span> <span className="text-white/50">=</span> <span className="text-amber-300">{val}</span></p>
              ))}
              <p className="text-emerald-300">// আপনার প্রথম ক্লায়েন্ট অপেক্ষায়</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

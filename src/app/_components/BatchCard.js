import { CalendarDays } from "lucide-react";
import Countdown from "./Countdown";
import { BATCH } from "@/data/site";
import { bn } from "@/lib/format";

export default function BatchCard() {
  const left = BATCH.seats - BATCH.taken;
  const pct = Math.round((BATCH.taken / BATCH.seats) * 100);
  const date = new Intl.DateTimeFormat("bn-BD", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${BATCH.start}T10:00:00+06:00`));

  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-5">
      <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-2xl shadow-royal/20 ring-1 ring-ink/5 md:grid-cols-2 md:p-8">
        <div>
          <p className="flex items-center gap-2 font-semibold text-royal"><CalendarDays size={18} /> পরবর্তী ব্যাচ শুরু: {date}</p>
          <div className="mt-4"><Countdown target={BATCH.start} /></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-end justify-between">
            <p className="font-semibold">আসন পূর্ণ হচ্ছে</p>
            <p className="text-sm text-ink/60">মোট {bn(BATCH.seats)}টির মধ্যে বাকি <b className="text-flame-dark">{bn(left)}টি</b></p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-lav" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full rounded-full bg-gradient-to-r from-flame to-amber-400" style={{ width: `${pct}%` }} />
          </div>
          <a href="#admission" className="mt-5 rounded-full bg-royal py-3.5 text-center font-semibold text-white transition hover:bg-deep">আসন বুক করুন</a>
        </div>
      </div>
    </div>
  );
}

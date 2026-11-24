"use client";
import { useEffect, useState } from "react";
import { bn } from "@/lib/format";

export default function Countdown({ target }) {
  const [left, setLeft] = useState(null);

  useEffect(() => {
    const end = new Date(`${target}T10:00:00+06:00`).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (left === null) return <div className="h-[88px]" aria-hidden="true" />;
  if (left === 0) return <p className="rounded-2xl bg-lav p-4 text-center font-semibold text-royal">এই ব্যাচের ক্লাস শুরু হয়েছে। পরের ব্যাচের জন্য যোগাযোগ করুন।</p>;

  const s = Math.floor(left / 1000);
  const parts = [[Math.floor(s / 86400), "দিন"], [Math.floor((s % 86400) / 3600), "ঘণ্টা"], [Math.floor((s % 3600) / 60), "মিনিট"], [s % 60, "সেকেন্ড"]];

  return (
    <div className="grid grid-cols-4 gap-2 text-center" role="timer" aria-label="ব্যাচ শুরুর বাকি সময়">
      {parts.map(([n, label]) => (
        <div key={label} className="rounded-2xl bg-deep px-1 py-3 text-white">
          <p className="font-display text-3xl font-bold leading-none">{bn(String(n).padStart(2, "0"))}</p>
          <p className="mt-1 text-xs text-white/70">{label}</p>
        </div>
      ))}
    </div>
  );
}

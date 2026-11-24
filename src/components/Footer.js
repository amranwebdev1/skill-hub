import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-10 text-white/70">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-xl font-bold text-white">{SITE.name}</p>
        <p className="mt-1 text-sm">{SITE.address} | {SITE.hours}</p>
        <p className="mt-6 text-xs text-white/50">এটি একটি ডেমো ল্যান্ডিং পেজ। প্রতিষ্ঠান, ইনস্ট্রাক্টর, দাম, রিভিউ ও তথ্য কাল্পনিক।</p>
      </div>
    </footer>
  );
}

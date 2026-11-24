import { GraduationCap } from "lucide-react";
import { SITE } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-violet-600 text-white"><GraduationCap size={20} /></span>
          <span className="font-display text-xl font-bold text-deep">{SITE.short}</span>
        </a>
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <a href="#learn" className="hover:text-royal">কী শিখবেন</a>
          <a href="#syllabus" className="hover:text-royal">সিলেবাস</a>
          <a href="#instructor" className="hover:text-royal">ইনস্ট্রাক্টর</a>
          <a href="#faq" className="hover:text-royal">প্রশ্নোত্তর</a>
        </nav>
        <a href="#admission" className="rounded-full bg-flame px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-flame-dark">ভর্তি হন</a>
      </div>
    </header>
  );
}

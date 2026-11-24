import { CheckCircle2 } from "lucide-react";
import { INSTRUCTOR } from "@/data/site";

export default function Instructor() {
  return (
    <section id="instructor" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[auto_1fr]">
      <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-[2.5rem]  font-display text-7xl font-bold text-white shadow-2xl shadow-royal/30" aria-hidden="true">
        <img src="https://raw.githubusercontent.com/amranwebdev1/amran_hossen/refs/heads/main/img/herro.png?token=GHSAT0AAAAAAERMWFD2K44XQTPGXYB463GG2YFYNKA" alt="img" />
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold text-deep md:text-4xl">আপনার ইনস্ট্রাক্টর</h2>
        <p className="mt-4 text-2xl font-semibold">{INSTRUCTOR.name}</p>
        <p className="font-medium text-royal">{INSTRUCTOR.role}</p>
        <p className="mt-3 max-w-xl text-ink/70">{INSTRUCTOR.bio}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
          {INSTRUCTOR.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[15px]"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-flame" />{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

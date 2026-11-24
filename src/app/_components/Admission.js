"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send, MessageCircle, Wallet } from "lucide-react";
import { SITE, COURSE, BATCH_TYPES, PAY_METHODS } from "@/data/site";
import { validateAdmission } from "@/lib/validators";
import { taka } from "@/lib/format";

const box = "mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-royal";
const EMPTY = { name: "", phone: "", batch: "offline", method: "bkash", trx: "" };

function Chips({ name, value, items, onChange }) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {items.map((it) => (
        <label key={it.id} className={`cursor-pointer rounded-xl border px-4 py-2.5 text-sm font-medium transition ${value === it.id ? "border-royal bg-lav text-royal" : "border-ink/15 bg-white hover:border-royal/40"}`}>
          <input type="radio" name={name} value={it.id} checked={value === it.id} onChange={() => onChange(it.id)} className="sr-only" />
          {it.label}
        </label>
      ))}
    </div>
  );
}

export default function Admission() {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const pay = PAY_METHODS.find((m) => m.id === f.method);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const er = validateAdmission(f);
    setErrors(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      const res = await fetch("/api/admit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (!res.ok) throw new Error();
      toast.success("আবেদন পেয়েছি! ফোন করে আসন নিশ্চিত করব।", { duration: 5000 });
      setF(EMPTY);
    } catch {
      toast.error("পাঠানো যায়নি। আবার চেষ্টা করুন বা হোয়াটসঅ্যাপে জানান।");
    } finally {
      setBusy(false);
    }
  }

  const waText = encodeURIComponent(`আসসালামু আলাইকুম, ${COURSE.title} কোর্সে ভর্তি হতে চাই। নাম: ${f.name}`);

  return (
    <section id="admission" className="bg-gradient-to-br from-deep to-royal py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-white">
          <h2 className="font-display text-3xl font-bold md:text-4xl">আসন নিশ্চিত করুন</h2>
          <p className="mt-3 text-lg text-white/80">বুকিং ফি পাঠিয়ে ফর্ম পূরণ করুন। বাকি টাকা ক্লাস শুরুর আগে দিলেই চলবে।</p>

          <div className="mt-8 rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <p className="text-white/70">কোর্স ফি</p>
            <p className="font-display text-4xl font-bold">{taka(COURSE.price)} <s className="text-lg font-normal text-white/50">{taka(COURSE.old)}</s></p>
            <p className="mt-3 flex items-center gap-2 text-amber-200"><Wallet size={18} /> বুকিং ফি {taka(COURSE.booking)}</p>
          </div>

          {pay?.mobile && (
            <div className="mt-4 rounded-3xl bg-white p-6 text-ink">
              <p className="font-semibold text-deep">{pay.label}-এ টাকা পাঠানোর নিয়ম</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-[15px] text-ink/75">
                <li>{pay.label} অ্যাপে {pay.note} বেছে নিন।</li>
                <li>নম্বর: <b className="text-royal">{pay.number}</b></li>
                <li>টাকা: <b>{taka(COURSE.booking)}</b>, রেফারেন্সে আপনার ফোন নম্বর লিখুন।</li>
                <li>পাঠানোর পর পাওয়া <b>TrxID</b> ফর্মে দিন।</li>
              </ol>
            </div>
          )}
        </div>

        <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-white p-6 shadow-2xl shadow-black/20">
          <label className="block text-sm font-semibold">আপনার নাম
            <input value={f.name} onChange={set("name")} autoComplete="name" className={box} />
            {errors.name && <small className="font-normal text-red-600">{errors.name}</small>}
          </label>
          <label className="block text-sm font-semibold">মোবাইল নম্বর
            <input value={f.phone} onChange={set("phone")} inputMode="numeric" maxLength={11} autoComplete="tel" className={box} />
            {errors.phone && <small className="font-normal text-red-600">{errors.phone}</small>}
          </label>
          <div className="text-sm font-semibold">ব্যাচের ধরন
            <Chips name="batch" value={f.batch} items={BATCH_TYPES} onChange={(v) => setF({ ...f, batch: v })} />
            {errors.batch && <small className="font-normal text-red-600">{errors.batch}</small>}
          </div>
          <div className="text-sm font-semibold">বুকিং ফি দেওয়ার মাধ্যম
            <Chips name="method" value={f.method} items={PAY_METHODS} onChange={(v) => setF({ ...f, method: v, trx: "" })} />
            {errors.method && <small className="font-normal text-red-600">{errors.method}</small>}
          </div>
          {pay?.mobile && (
            <label className="block text-sm font-semibold">{pay.label} TrxID
              <input value={f.trx} onChange={set("trx")} autoCapitalize="characters" maxLength={12} placeholder="যেমন 9AB1C2D3EF" className={box} />
              {errors.trx && <small className="font-normal text-red-600">{errors.trx}</small>}
            </label>
          )}
          <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-flame py-4 text-lg font-semibold text-white transition hover:bg-flame-dark disabled:opacity-60">
            <Send size={18} /> {busy ? "পাঠানো হচ্ছে..." : "ভর্তির আবেদন পাঠান"}
          </button>
          <a href={`https://wa.me/${SITE.wa}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 py-3.5 font-semibold hover:bg-lav">
            <MessageCircle size={18} /> আগে প্রশ্ন করতে চাই (হোয়াটসঅ্যাপ)
          </a>
        </form>
      </div>
    </section>
  );
}

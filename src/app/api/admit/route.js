import { NextResponse } from "next/server";
import { COURSE, BATCH_TYPES, PAY_METHODS } from "@/data/site";
import { validateAdmission } from "@/lib/validators";
import { sendTelegram } from "@/lib/telegram";
import { bn } from "@/lib/format";

const clean = (s) => String(s ?? "").replace(/[<>&]/g, "").slice(0, 100);

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (Object.keys(validateAdmission(d)).length) return NextResponse.json({ ok: false }, { status: 400 });

  const batch = BATCH_TYPES.find((b) => b.id === d.batch);
  const pay = PAY_METHODS.find((m) => m.id === d.method);

  const text =
    "🎓 নতুন ভর্তির আবেদন\n" +
    `ব্যাচ: ${batch.label}\nপেমেন্ট: ${pay.label}` +
    (pay.mobile ? `\nTrxID: ${clean(d.trx).toUpperCase()}` : "") +
    `\nবুকিং ফি: ${bn(COURSE.booking)} টাকা\n\n` +
    `নাম: ${clean(d.name)}\nফোন: ${clean(d.phone)}`;

  const r = await sendTelegram(text);
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}

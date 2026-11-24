import { BATCH_TYPES, PAY_METHODS } from "@/data/site";

export function validateAdmission({ name = "", phone = "", batch = "", method = "", trx = "" }) {
  const errors = {};
  if (name.trim().length < 3) errors.name = "আপনার পুরো নাম লিখুন";
  if (!/^01[3-9]\d{8}$/.test(phone.trim())) errors.phone = "১১ সংখ্যার সঠিক মোবাইল নম্বর দিন, যেমন 01712345678";
  if (!BATCH_TYPES.some((b) => b.id === batch)) errors.batch = "ব্যাচের ধরন বেছে নিন";

  const pay = PAY_METHODS.find((m) => m.id === method);
  if (!pay) errors.method = "পেমেন্টের মাধ্যম বেছে নিন";
  else if (pay.mobile && !/^[A-Za-z0-9]{8,12}$/.test(trx.trim())) errors.trx = "পেমেন্টের পর পাওয়া ৮-১২ অক্ষরের TrxID দিন";
  return errors;
}

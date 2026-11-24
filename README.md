# স্কিল হাব একাডেমি: কোর্স ভর্তি ল্যান্ডিং পেজ (Next.js 15 + Tailwind 4)

```
npm install
cp .env.example .env.local
npm run dev
```
- নাম, ফোন, বিকাশ/নগদ নম্বর, ব্যাচ শুরুর তারিখ, আসন, দাম, সিলেবাস, রিভিউ, FAQ: `src/data/site.js`
- ভর্তির ফর্ম Telegram-এ যায় (`.env.local` এ টোকেন ও চ্যাট আইডি), না বসালে টার্মিনালে দেখায়
- ছবি লাগে না। নিজের ছবি যোগ করতে `public/` এ রেখে কম্পোনেন্টে `<img src="/ছবি.jpg">` দিন
- Vercel-এ ডিপ্লয়ের সময় একই দুটো Environment Variable বসান

ফোল্ডার: `src/app/_components` (শুধু এই পেজের), `src/components` (গ্লোবাল), `src/lib`, `src/data`

import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "স্কিল হাব একাডেমি | ওয়েব ডেভেলপমেন্ট ও ফ্রিল্যান্সিং কোর্স",
  description: "৪ মাসের হাতে-কলমে কোর্স। Next.js, Laravel ও ফ্রিল্যান্সিং শিখুন। ভর্তি চলছে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <Toaster position="top-center" toastOptions={{ style: { fontFamily: "inherit" } }} />
      </body>
    </html>
  );
}

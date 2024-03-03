import React from 'react'
import localFont from 'next/font/local'
import "./globals.css";
import { Suspense } from 'react';
import Loading from './loading';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Toaster } from 'sonner'
const SansWeb = localFont({ src: [{ path: "./assets/fonts/SansWeb.ttf" }, { path: "./assets/fonts/SansNum.ttf" }] });

export const metadata = {
  title: {
    default: "تیم طراحی او پی | op team | ساخت انواع سایت ",
    template: "%s | op team | تیم طراحی او پی"
  },
  description: "مکانیک سیار در هر جای شهرکرد که باشی میاد کمکت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={SansWeb.className}>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}

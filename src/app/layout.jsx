import React from 'react'
import localFont from 'next/font/local'
import "./globals.css";
import { Suspense } from 'react';
import Loading from './loading';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Toaster } from 'sonner'
import { SessionProvider } from 'next-auth/react';

const SansWeb = localFont({ src: [{ path: "./assets/fonts/SansWeb.ttf" }, { path: "./assets/fonts/SansNum.ttf" }] });
export const metadata = {
  title: {
    default: "تیم طراحی او پی | op team | ساخت انواع سایت ",
    template: "%s | op team | تیم طراحی او پی"
  },
  description: "تیم طراحی او پی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={SansWeb.className}>
        <Suspense fallback={<Loading />}>
          <SessionProvider>
            <Header />
            {children}
            <Footer />
          </SessionProvider>
        </Suspense>
        <Toaster duration={5000} position='top-center' className={`${SansWeb.className} text-center flex justify-center items-center text-sm font-bold `} />
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Head from "./components/Head";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //talk about this issue
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  ) : (
    <></>
  );
}

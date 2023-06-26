"use client";

import Head from "./components/Head";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

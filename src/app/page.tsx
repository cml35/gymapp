import prisma from "../../lib/prisma";
import HomePage from "./home/page";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}

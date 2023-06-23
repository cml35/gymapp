import React from "react";
import Logo from "../components/Logo";
import OptionList from "../components/OptionList";
import Header from "../components/Header";
import { Workout } from "@prisma/client";

const HomePage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-7xl mb-8">Welcome to Jim&apos;s App</h1>
          <Logo />
          <OptionList />
        </div>
      </main>
    </>
  );
};

export default HomePage;

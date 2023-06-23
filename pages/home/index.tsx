import React from "react";
import Logo from "../../components/Logo";
import OptionList from "../../components/OptionList";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl mb-8">Welcome to Jim&apos;s App</h1>
        <Logo />
        <OptionList />
      </div>
    </>
  );
};

export default HomePage;

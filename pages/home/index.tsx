import React from "react";
import Logo from "../../components/Logo";
import Options from "../../components/Options";
import RootLayout from "../../layout";

const HomePage = () => {
  return (
    <RootLayout>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-blue-100 text-7xl mb-8">
          Welcome to Jim&apos;s App
        </h1>
        <Logo />
        <Options />
      </div>
    </RootLayout>
  );
};

export default HomePage;

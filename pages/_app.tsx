import "../styles/globals.css";
import { ExerciseProvider } from "../providers/ExerciseProvider";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ExerciseProvider>
        <Component {...pageProps} />
      </ExerciseProvider>
    </SessionProvider>
  );
};

export default App;

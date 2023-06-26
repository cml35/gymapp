import "../styles/globals.css";
import { WorkoutProvider } from "../providers/WorkoutProvider";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <WorkoutProvider>
        <Component {...pageProps} />
      </WorkoutProvider>
    </SessionProvider>
  );
};

export default App;

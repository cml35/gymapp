import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ExerciseProvider } from "../providers/ExerciseProvider";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ExerciseProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ExerciseProvider>
    </SessionProvider>
  );
};

export default App;

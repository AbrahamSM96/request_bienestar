import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TuplesProvider } from "../context/tuplesContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TuplesProvider>
      <Component {...pageProps} />
    </TuplesProvider>
  );
}

export default MyApp;

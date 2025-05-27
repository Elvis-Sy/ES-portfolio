import { calibre, jetbrains_mono } from "public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import "../styles/globals.scss";
import { GTAG } from "constants";
import { SoundProvider } from "@/components/Header/SoundBar/SoundContext";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <SoundProvider>
        <main
          className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
        >
          <Component {...pageProps} />
          <GoogleAnalytics gaId={GTAG} />
        </main>
      </SoundProvider>
    </>
  );
};

export default App;

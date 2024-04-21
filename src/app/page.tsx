import Image from "next/image";
import {GoogleGeminiEffectDemo} from "../app/components/ui/comp";
import { MacbookScrollDemo } from "./components/ui/macbookScroll";
import {GlobeDemo} from "./components/ui/git-globe";
import { BentoGridDemo } from "./components/ui/bento";
import { EvervaultCardDemo } from "./components/ui/hover";
import { SparklesPreview } from "./components/ui/sparkle";
export default function Home() {
  return (
    <>
      <SparklesPreview/>
      <EvervaultCardDemo />
      <MacbookScrollDemo />
      <GoogleGeminiEffectDemo />
      <GlobeDemo />
      <BentoGridDemo />
    </>
  );
}

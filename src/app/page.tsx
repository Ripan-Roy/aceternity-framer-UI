import Image from "next/image";
import {GoogleGeminiEffectDemo} from "../app/components/ui/comp";
import { MacbookScroll } from "./components/ui/macbook-scroll";
import { MacbookScrollDemo } from "./components/ui/macbookScroll";
export default function Home() {
  return (
    <>
      <MacbookScrollDemo />
      <GoogleGeminiEffectDemo />
    </>
  );
}

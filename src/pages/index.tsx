import { Hero } from "~/components/home/hero";
import { CallToAction } from "~/components/home/call-to-action";
import { GettingStarted } from "~/components/home/getting-started";
import { LoremIpsum } from "~/components/home/lorem-ipsum";
import { Pricing } from "~/components/home/pricing";

export default function Home() {
  return (
    <div class="leading-normal tracking-normal text-white gradient">
      <Hero />
      <LoremIpsum />
      <GettingStarted />
      <Pricing />
      <CallToAction />
    </div>
  );
}

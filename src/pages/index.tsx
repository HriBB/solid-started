import { Resource } from 'solid-js'
import { useData } from 'solid-app-router'

import { Data } from './index.data'
import { Hero } from '~/components/home/hero'
import { CallToAction } from '~/components/home/call-to-action'
import { GettingStarted } from '~/components/home/getting-started'
import { LoremIpsum } from '~/components/home/lorem-ipsum'
import { Pricing } from '~/components/home/pricing'

export default function Home() {
  const data = useData<Resource<Data>>()
  return (
    <div class="leading-normal tracking-normal text-white gradient">
      <div text="center" p="t-20">
        {JSON.stringify(data(), null, 2)}
      </div>
      <Hero />
      <LoremIpsum />
      <GettingStarted />
      <Pricing />
      <CallToAction />
    </div>
  )
}

import { Button } from '~/components/ui'
import Background from './Background'
import heroImage from './hero.png'

const Hero = () => {
  return (
    <>
      <div class="pt-24">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose w-full">
              What business are you?
            </p>
            <h1 m="y-4" text="5xl" font="bold" leading-tight>
              Main Hero Message to sell yourself!
            </h1>
            <p class="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
            <Button class="mx-auto md:mx-0 z-10">Subscribe</Button>
          </div>
          <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-full md:w-4/5 z-50" src={heroImage} />
          </div>
        </div>
      </div>
      <div class="relative -mt-12 lg:-mt-24">
        <Background />
      </div>
    </>
  )
}

export default Hero

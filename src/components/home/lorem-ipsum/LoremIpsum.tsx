import { Title } from '~/components/ui'
import ConnectedWorld from './ConnectedWorld'
import TravelBooking from './TravelBooking'

const LoremIpsum = () => {
  return (
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <Title>Lorem ipsum</Title>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p class="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
              <br />
              <br />
              Images from:
              <a class="text-pink-500 underline" href="https://undraw.co/">
                undraw.co
              </a>
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <TravelBooking />
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <ConnectedWorld />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:
                <a class="text-pink-500 underline" href="https://undraw.co/">
                  undraw.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoremIpsum

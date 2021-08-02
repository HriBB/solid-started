import { Title } from '~/components/ui'
import ConnectedWorld from './ConnectedWorld'
import TravelBooking from './TravelBooking'

const LoremIpsumItem = () => {
  return (
    <div flex="~ col" justify="center" w="5/6 sm:1/2" p="6">
      <h3 text="3xl gray-800" font="bold leading-none" m="b-3">
        Lorem ipsum dolor sit amet
      </h3>
      <p text="gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        ipsum eu nunc commodo posuere et sit amet ligula.
        <br />
        <br />
        Images from: &nbsp;
        <a text="pink-500 underline" href="https://undraw.co/">
          undraw.co
        </a>
      </p>
    </div>
  )
}

export default LoremIpsumItem

import { Title } from '~/components/ui'
import ConnectedWorld from './ConnectedWorld'
import LoremIpsumItem from './Item'
import TravelBooking from './TravelBooking'

const LoremIpsum = () => {
  return (
    <section bg="white" border="b" p="y-8">
      <div container="~" m="x-auto y-8">
        <Title>Lorem ipsum</Title>
        <div flex="~ wrap">
          <LoremIpsumItem />
          <div w="full sm:1/2" p="6">
            <TravelBooking />
          </div>
        </div>
        <div flex="~ wrap sm:row-reverse">
          <LoremIpsumItem />
          <div w="full sm:1/2" p="6">
            <ConnectedWorld />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoremIpsum

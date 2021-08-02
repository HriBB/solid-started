import { Button } from '~/components/ui'
import Title from './ItemTitle'
import Separator from './ItemSeparator'
import List from './ItemList'
import Price from './ItemPrice'

type Props = {
  raised?: boolean
  title: string
  items: string[]
  price: number
}

const PricingItem = (props: Props) => {
  return (
    <div
      bg="white"
      text="gray-600"
      flex="~ 1 col"
      w="5/6"
      lg:w={props.raised ? '1/3' : '1/4'}
      m="x-auto t-4"
      sm:m={props.raised ? '-t-6' : 't-4'}
      md:m="-x-1"
      border="~ rounded-none lg:rounded"
      shadow={props.raised ? 'lg' : 'sm'}
      z={props.raised ? '10' : '1'}
    >
      <Title>{props.title}</Title>
      <Separator raised={props.raised} />
      <List items={props.items} />
      <Price>{props.price}</Price>
      <Button primary class="mx-auto my-6">
        Sign Up
      </Button>
    </div>
  )
}

export default PricingItem

import { Title } from '~/components/ui'
import Item from './Item'

const items = ['Thing', 'Thing', 'Thing']

const Pricing = () => {
  return (
    <section bg="gray-100" p="y-8">
      <div container="~" m="x-auto" p="t-4" text="gray-800">
        <Title>Pricing</Title>
        <div flex="~ col sm:row" justify="center" p="t-4 sm:t-12" sm:m="y-12">
          <Item title="Free" price={0} items={items} />
          <Item title="Basic" price={100} items={items} raised />
          <Item title="Pro" price={200} items={items} />
        </div>
      </div>
    </section>
  )
}

export default Pricing

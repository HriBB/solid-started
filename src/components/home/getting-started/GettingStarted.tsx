import { Title } from '~/components/ui'
import Item from './Item'

const GettingStarted = () => {
  return (
    <section bg="white" border="b" p="y-8">
      <div container="~" flex="~ wrap" m="x-auto" p="t-4 b-12">
        <Title>Getting Started</Title>
        <Item
          title="GETTING STARTED"
          subtitle="Lorem ipsum dolor sit amet."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          action="Action"
        />
        <Item
          title="GETTING STARTED"
          subtitle="Lorem ipsum dolor sit amet."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          action="Action"
        />
        <Item
          title="GETTING STARTED"
          subtitle="Lorem ipsum dolor sit amet."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          action="Action"
        />
      </div>
    </section>
  )
}

export default GettingStarted

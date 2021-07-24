import { Title } from '~/components/ui'
import Item from './Item'

const GettingStarted = () => {
  return (
    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
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

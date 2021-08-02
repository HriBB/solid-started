import { For } from 'solid-js'

type Props = {
  items: string[]
}

const PricingItemList = (props: Props) => {
  return (
    <ul w="full" text="sm center">
      <For each={props.items}>
        {(item) => <li class="border-b py-4">{item}</li>}
      </For>
    </ul>
  )
}

export default PricingItemList

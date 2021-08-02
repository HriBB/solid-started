import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const PricingItemPrice = (props: Props) => {
  return (
    <div w="full" p="t-6" text="3xl gray-600 center" font="bold">
      €{props.children}
      <span text="base">/ per user</span>
    </div>
  )
}

export default PricingItemPrice

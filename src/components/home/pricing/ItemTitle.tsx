import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const PricingItemTitle = (props: Props) => {
  return (
    <div p="8" text="3xl center" font="bold">
      {props.children}
    </div>
  )
}

export default PricingItemTitle

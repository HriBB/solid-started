import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeroLabel = (props: Props) => {
  return (
    <p w="full" text="uppercase" font="tracking-loose">
      {props.children}
    </p>
  )
}

export default HeroLabel

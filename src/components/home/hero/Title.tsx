import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeroTitle = (props: Props) => {
  return (
    <h1 m="y-4" text="5xl" font="bold leading-tight">
      {props.children}
    </h1>
  )
}

export default HeroTitle

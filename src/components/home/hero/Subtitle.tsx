import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeroSubtitle = (props: Props) => {
  return (
    <p text="2xl" font="leading-normal" m="b-8">
      {props.children}
    </p>
  )
}

export default HeroSubtitle

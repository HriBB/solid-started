import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeroContent = (props: Props) => {
  return (
    <div
      flex="~ col"
      align="items-start"
      justify="center"
      text="center md:left"
      w="full md:2/5"
    >
      {props.children}
    </div>
  )
}

export default HeroContent

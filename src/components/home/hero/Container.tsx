import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeroContainer = (props: Props) => {
  return (
    <div
      container="~"
      flex="~ wrap col md:row"
      align="items-center"
      m="x-auto"
      p="x-3"
    >
      {props.children}
    </div>
  )
}

export default HeroContainer

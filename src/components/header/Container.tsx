import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const HeaderContainer = (props: Props) => {
  return (
    <div
      class="container"
      w="full"
      m="x-auto"
      p="y-2"
      flex="~ wrap items-center"
      justify="between"
    >
      {props.children}
    </div>
  )
}

export default HeaderContainer

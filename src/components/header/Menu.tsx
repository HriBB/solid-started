import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  opened: () => boolean
}

const HeaderMenu = (props: Props) => {
  return (
    <div
      display={props.opened() ? 'block' : 'hidden'}
      bg="white lg:transparent"
      text="black"
      w="full lg:auto"
      p="4 lg:0"
      z="20"
      lg:flex="~ items-center"
    >
      <ul list="reset" lg:flex="~ flex-1 items-center justify-end">
        {props.children}
      </ul>
    </div>
  )
}

export default HeaderMenu

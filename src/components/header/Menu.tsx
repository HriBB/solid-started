import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  opened: () => boolean
}

const HeaderMenu = (props: Props) => {
  return (
    <div
      bg="white lg:transparent"
      text="black"
      w="full lg:auto"
      p="4 lg:0"
      z="20"
      lg:flex="~ items-center"
      class={props.opened() ? '' : 'hidden'}
    >
      <ul list="reset" lg:flex="~ flex-1 items-center justify-end">
        {props.children}
      </ul>
    </div>
  )
}

export default HeaderMenu

import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  scrolled: () => boolean
  opened: () => boolean
}

const HeaderNav = (props: Props) => {
  return (
    <nav
      pos="fixed top-0"
      w="full"
      z="30"
      bg={props.scrolled() || props.opened() ? 'white' : 'transparent'}
      shadow={props.scrolled() ? 'md' : 'none'}
    >
      {props.children}
    </nav>
  )
}

export default HeaderNav

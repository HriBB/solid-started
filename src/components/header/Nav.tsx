import { JSX } from 'solid-js'

type Props = {
  raised?: () => boolean
  children?: JSX.Element
}

const HeaderNav = (props: Props) => {
  return (
    <nav
      pos="fixed top-0"
      w="full"
      z="30"
      bg={props.raised() ? 'white' : 'transparent'}
      shadow={props.raised() ? 'md' : 'none'}
    >
      {props.children}
    </nav>
  )
}

export default HeaderNav

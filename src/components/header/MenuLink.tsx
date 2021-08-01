import { JSX } from 'solid-js'
import { Link } from 'solid-app-router'

type Props = {
  children?: JSX.Element
  href?: string
  raised: () => boolean
  onClick?: () => void
}

const HeaderMenuLink = (props: Props) => {
  return (
    <li m="r-3">
      <Link
        href={props.href}
        text={`${props.raised() ? 'gray-800' : 'white'} no-underline`}
        hover:text="pink-700 underline"
        p="x-4 y-2"
        display="inline-block"
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default HeaderMenuLink

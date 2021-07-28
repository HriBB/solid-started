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
    <li class="mr-3">
      <Link
        text={`${props.raised() ? 'gray-800' : 'white'} no-underline`}
        hover:text="gray-800 underline"
        p="x-4 y-2"
        display="inline-block"
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default HeaderMenuLink

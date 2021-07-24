import { JSX } from 'solid-js'
import { Link } from 'solid-app-router'

type Props = {
  children?: JSX.Element
  href?: string
}

const HeaderMenuLink = (props: Props) => {
  return (
    <li class="mr-3">
      <Link
        class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
        href={props.href}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default HeaderMenuLink

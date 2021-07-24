import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  href: string
}

const FooterListItem = (props: Props) => {
  return (
    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
      <a
        href={props.href}
        class="no-underline hover:underline text-gray-800 hover:text-pink-500"
      >
        {props.children}
      </a>
    </li>
  )
}

export default FooterListItem

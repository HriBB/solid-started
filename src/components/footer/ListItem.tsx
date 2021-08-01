import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  href: string
}

const FooterListItem = (props: Props) => {
  return (
    <li m="t-2 r-2 md:r-0" display="inline-block md:block">
      <a
        href={props.href}
        text="no-underline gray-800"
        hover:text="underline pink-500"
      >
        {props.children}
      </a>
    </li>
  )
}

export default FooterListItem

import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const FooterListTitle = (props: Props) => {
  return <p class="uppercase text-gray-500 md:mb-6">{props.children}</p>
}

export default FooterListTitle

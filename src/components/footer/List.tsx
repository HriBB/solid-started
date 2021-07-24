import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const FooterList = (props: Props) => {
  return <ul class="list-reset mb-6">{props.children}</ul>
}

export default FooterList

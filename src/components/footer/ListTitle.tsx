import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const FooterListTitle = (props: Props) => {
  return (
    <p text="uppercase gray-500" md:m="b-6">
      {props.children}
    </p>
  )
}

export default FooterListTitle

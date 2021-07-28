import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
}

const Content = (props: Props) => {
  return (
    <main container="~" m="x-auto t-20" p="8">
      {props.children}
    </main>
  )
}

export default Content

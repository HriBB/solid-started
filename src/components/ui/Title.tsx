import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  color?: 'default' | 'white'
}

const SectionTitle = (props: Props) => {
  return (
    <div class="w-full mb-4">
      <h1
        w="full"
        m="x-auto y-2"
        font="bold leading-tight"
        align="center"
        text={`5xl ${props.color === 'white' ? 'white' : 'gray-800'}`}
      >
        {props.children}
      </h1>
      <div
        w="64"
        h="1"
        m="x-auto y-0"
        p="y-0"
        opacity="25"
        bg={props.color === 'white' ? 'white' : 'gradient'}
      />
    </div>
  )
}

export default SectionTitle

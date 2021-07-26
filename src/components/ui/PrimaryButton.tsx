import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  class?: string
}

const PrimaryButton = (props: Props) => {
  return (
    <button
      class={props.class}
      font="bold"
      border="rounded-full"
      p="x-8 y-4"
      bg={'gradient'}
      text={'white'}
      transition="scale duration-300 ease-in-out"
      hover="scale-105"
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton

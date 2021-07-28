import { JSX } from 'solid-js'

type Props = {
  children?: JSX.Element
  class?: string
  primary?: boolean
}

const Button = (props: Props) => {
  return (
    <button
      font="bold"
      border="rounded-full"
      p="x-8 y-4"
      bg={props.primary ? 'gradient' : 'white'}
      text={props.primary ? 'white' : 'pink-800'}
      transition="scale duration-300 ease-in-out"
      transform="~"
      hover="scale-105"
      class={props.class}
    >
      {props.children}
    </button>
  )
}

export default Button

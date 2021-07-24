import Icon from './MenuIcon'

type Props = {
  onClick: () => void
  scrolled: () => boolean
  opened: () => boolean
}

const HeaderMenuButton = (props: Props) => {
  return (
    <div class="block lg:hidden pr-4">
      <button
        onClick={props.onClick}
        flex="~ items-center"
        p="1"
        hover:text="gray-900"
        focus:outline="none"
        focus:shadow="outline"
        transform="~"
        transition="scale duration-300 ease-in-out"
        hover="scale-105"
        class={
          props.scrolled() || props.opened() ? 'text-gray-800' : 'text-pink-700'
        }
      >
        <Icon class="fill-current h-6 w-6" />
      </button>
    </div>
  )
}

export default HeaderMenuButton

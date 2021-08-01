import Icon from './MenuIcon'

type Props = {
  raised?: () => boolean
  onClick?: () => void
}

const HeaderMenuButton = (props: Props) => {
  return (
    <div flex="~" align="items-center" lg:display="hidden" p="r-4">
      <button
        p="1"
        flex="~ items-center"
        hover:text="gray-900"
        focus:outline="none"
        focus:shadow="outline"
        transform="~"
        transition="scale duration-300 ease-in-out"
        hover="scale-105"
        text={props.raised() ? 'gray-800' : 'white'}
        onClick={props.onClick}
      >
        <Icon class="fill-current h-6 w-6" />
      </button>
    </div>
  )
}

export default HeaderMenuButton

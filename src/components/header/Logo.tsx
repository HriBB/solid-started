import PlaneIcon from './PlaneIcon'

type Props = {
  scrolled: () => boolean
  opened: () => boolean
}

const HeaderLogo = (props: Props) => {
  return (
    <div class="pl-4 flex items-center">
      <a
        href="/"
        text="3xl no-underline"
        hover:text="no-underline"
        font="bold"
        class={
          props.scrolled() || props.opened() ? 'text-gray-800' : 'text-white'
        }
      >
        <PlaneIcon class="mr-3 h-8 fill-current inline" />
        CLIMBING TALES
      </a>
    </div>
  )
}

export default HeaderLogo

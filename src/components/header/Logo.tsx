import { Link } from 'solid-app-router'
import PlaneIcon from './PlaneIcon'

type Props = {
  raised?: () => boolean
  onClick?: () => void
}

const HeaderLogo = (props: Props) => {
  return (
    <div class="pl-4 flex items-center">
      <Link
        href="/"
        hover:text="no-underline"
        font="bold"
        text={`3xl no-underline ${props.raised() ? 'gray-800' : 'white'}`}
        onClick={props.onClick}
      >
        <PlaneIcon class="mr-3 h-8 fill-current inline" />
        CLIMBING TALES
      </Link>
    </div>
  )
}

export default HeaderLogo

import PlaneIcon from '../header/PlaneIcon'

const FooterLogo = () => {
  return (
    <a
      text="pink-600 2xl lg:4xl no-underline"
      hover:text="no-underline"
      font="bold"
      href="#"
    >
      <PlaneIcon class="h-8 mr-2 mb-3 fill-current inline" />
      CLIMBING TALES
    </a>
  )
}

export default FooterLogo

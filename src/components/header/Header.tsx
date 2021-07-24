import { createSignal, onMount, onCleanup } from 'solid-js'
import Nav from './Nav'
import Logo from './Logo'
import Menu from './Menu'
import MenuLink from './MenuLink'
import MenuButton from './MenuButton'
import Container from './Container'

const isScrolled = () =>
  typeof window !== 'undefined' ? window.scrollY > 10 : false

const Header = () => {
  const [opened, setOpened] = createSignal(false)
  const [scrolled, setScrolled] = createSignal(isScrolled())

  const handleClick = () => setOpened(!opened())

  const handleScroll = () => {
    if (isScrolled() !== scrolled()) {
      setScrolled(isScrolled())
    }
  }

  onMount(() => document.addEventListener('scroll', handleScroll))
  onCleanup(() => document.removeEventListener('scroll', handleScroll))

  return (
    <Nav scrolled={scrolled} opened={opened}>
      <Container>
        <Logo scrolled={scrolled} opened={opened} />
        <MenuButton onClick={handleClick} scrolled={scrolled} opened={opened} />
        <Menu opened={opened}>
          <MenuLink href={'/'}>Home</MenuLink>
          <MenuLink href={'/blog'}>Blog</MenuLink>
          <MenuLink href={'/about'}>About</MenuLink>
        </Menu>
      </Container>
      <hr m="y-0" p="y-0" border="b gray-100" opacity="25" />
    </Nav>
  )
}

export default Header

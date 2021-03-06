import { createSignal, onMount, onCleanup, createMemo } from 'solid-js'
import { useLocation, useData } from 'solid-app-router'
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

  const closeMenu = () => setOpened(false)
  const toggleMenu = () => setOpened(!opened())
  const handleScroll = () => {
    if (isScrolled() !== scrolled()) {
      setScrolled(isScrolled())
    }
  }

  const location = useLocation()
  const home = () => location.pathname === '/'
  const raised = createMemo(() => !home() || scrolled() || opened())

  onMount(() => document.addEventListener('scroll', handleScroll))
  onCleanup(() => document.removeEventListener('scroll', handleScroll))

  return (
    <Nav raised={raised}>
      <Container>
        <Logo raised={raised} onClick={closeMenu} />
        <MenuButton raised={raised} onClick={toggleMenu} />
        <Menu opened={opened}>
          <MenuLink href={'/'} raised={raised} onClick={closeMenu}>
            Home
          </MenuLink>
          <MenuLink href={'/blog'} raised={raised} onClick={closeMenu}>
            Blog
          </MenuLink>
          <MenuLink href={'/about'} raised={raised} onClick={closeMenu}>
            About
          </MenuLink>
        </Menu>
      </Container>
      <hr m="y-0" p="y-0" border="b gray-100" opacity="25" />
    </Nav>
  )
}

export default Header

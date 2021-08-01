import PlaneIcon from '../header/PlaneIcon'
import FooterList from './List'
import FooterListItem from './ListItem'
import FooterListTitle from './ListTitle'
import FooterLogo from './Logo'

const Footer = () => {
  return (
    <footer bg="white">
      <div container="~" m="x-auto" p="x-8">
        <div w="full" flex="~ col md:row" p="y-6">
          <div flex="1" m="b-6 r-6" text="black">
            <FooterLogo />
          </div>
          <div flex="1">
            <FooterListTitle>Links</FooterListTitle>
            <FooterList>
              <FooterListItem href="#">FAQ</FooterListItem>
              <FooterListItem href="#">Help</FooterListItem>
              <FooterListItem href="#">Support</FooterListItem>
            </FooterList>
          </div>
          <div flex="1">
            <FooterListTitle>Legal</FooterListTitle>
            <FooterList>
              <FooterListItem href="#">Terms</FooterListItem>
              <FooterListItem href="#">Privacy</FooterListItem>
            </FooterList>
          </div>
          <div flex="1">
            <FooterListTitle>Social</FooterListTitle>
            <FooterList>
              <FooterListItem href="#">Facebook</FooterListItem>
              <FooterListItem href="#">Linkedin</FooterListItem>
              <FooterListItem href="#">Twitter</FooterListItem>
            </FooterList>
          </div>
          <div flex="1">
            <FooterListTitle>Company</FooterListTitle>
            <FooterList>
              <FooterListItem href="#">Official Blog</FooterListItem>
              <FooterListItem href="#">About Us</FooterListItem>
              <FooterListItem href="#">Contact</FooterListItem>
            </FooterList>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

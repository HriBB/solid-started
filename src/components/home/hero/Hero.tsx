import { Button } from '~/components/ui'
import Container from './Container'
import Content from './Content'
import Label from './Label'
import Title from './Title'
import Subtitle from './Subtitle'
import Image from './Image'
import Background from './Background'

const Hero = () => {
  return (
    <>
      <div p="t-24">
        <Container>
          <Content>
            <Label>What business are you?</Label>
            <Title>Main Hero Message to sell yourself!</Title>
            <Subtitle>
              Sub-hero message, not too long and not too short. Make it just
              right!
            </Subtitle>
            <Button class="mx-auto md:mx-0 z-10">Subscribe</Button>
          </Content>
          <Image />
        </Container>
      </div>
      <div pos="relative" m="-t-12 lg:-t-24">
        <Background />
      </div>
    </>
  )
}

export default Hero

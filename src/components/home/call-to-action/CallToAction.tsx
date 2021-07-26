import { WhiteButton, Title } from '~/components/ui'

const CallToAction = () => {
  return (
    <section class="container mx-auto text-center py-6">
      <Title color="white">Call to Action</Title>
      <h3 class="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <WhiteButton class="my-6">Action</WhiteButton>
    </section>
  )
}

export default CallToAction

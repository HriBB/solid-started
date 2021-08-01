import { Button, Title } from '~/components/ui'

const CallToAction = () => {
  return (
    <section container="~" m="x-auto" p="y-6" align="center">
      <Title color="white">Call to Action</Title>
      <h3 m="y-4" text="3xl center" font="leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <Button class="my-6">Action</Button>
    </section>
  )
}

export default CallToAction

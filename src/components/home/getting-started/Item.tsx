import { Button } from '~/components/ui'

type Props = {
  title: string
  subtitle: string
  text: string
  action: string
}

const GettingStartedItem = (props: Props) => {
  return (
    <div w="full md:1/3" flex="~ col grow shrink" p="6">
      <div flex="1" shadow="~" bg="white" overflow="hidden" border="rounded">
        <a href="#" flex="~ wrap" text="no-underline hover:no-underline">
          <p w="full" text="gray-600 xs md:sm" p="x-6" m="t-4">
            {props.title}
          </p>
          <div w="full" text="gray-800 xl" font="bold" p="x-6">
            {props.subtitle}
          </div>
          <p text="gray-800 base" p="x-6" m="b-5">
            {props.text}
          </p>
        </a>
        <Button primary class="m-6 mt-0">
          {props.action}
        </Button>
      </div>
    </div>
  )
}

export default GettingStartedItem

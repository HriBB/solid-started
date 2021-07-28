import { Button } from '~/components/ui'

type Props = {
  title: string
  subtitle: string
  text: string
  action: string
}

const GettingStartedItem = (props: Props) => {
  return (
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            {props.title}
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            {props.subtitle}
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">{props.text}</p>
        </a>
      </div>
      <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div class="flex items-center justify-start">
          <Button primary>{props.action}</Button>
        </div>
      </div>
    </div>
  )
}

export default GettingStartedItem

import { createResource } from 'solid-js'

export type Data = {
  page: string
  simulateFetch: boolean
  sleep: number
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const simulateFetch = async () => {
  console.log('fetch home data')
  await sleep(1000)
  return {
    page: 'home',
    simulateFetch: true,
    sleep: 1000,
  }
}

export default function HomeData() {
  const [data] = createResource<Data>(simulateFetch)
  return data
}

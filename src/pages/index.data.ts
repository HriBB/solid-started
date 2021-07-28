import { createResource } from 'solid-js'

export type Data = {
  page: string
  simulateFetch: boolean
  sleep: number
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const simulateFetch = async () => {
  console.log('fetch home data')

  const ms = 1000
  await sleep(ms)
  return {
    page: 'home',
    simulateFetch: true,
    sleep: ms,
  }
}

export default function HomeData() {
  const [data] = createResource(simulateFetch)
  return data
}

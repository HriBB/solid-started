import { createResource } from 'solid-js'

export type Data = {
  page: string
  simulateFetch: boolean
  sleep: number
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const simulateFetch = async () => {
  console.log('fetch blog data')

  const ms = 1000
  await sleep(ms)
  return {
    page: 'blog',
    simulateFetch: true,
    sleep: ms,
  }
}

export default function BlogData() {
  const [data] = createResource(simulateFetch)
  return data
}

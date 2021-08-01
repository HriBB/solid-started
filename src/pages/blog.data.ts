import { createResource } from 'solid-js'

export type Data = {
  page: string
  simulateFetch: boolean
  sleep: number
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const simulateFetch = async () => {
  console.log('fetch blog data')
  await sleep(1000)
  return {
    page: 'blog',
    simulateFetch: true,
    sleep: 1000,
  }
}

export default function BlogData() {
  const [data] = createResource(simulateFetch)
  return data
}

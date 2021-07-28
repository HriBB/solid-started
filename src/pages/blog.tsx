import { Resource } from 'solid-js'
import { useData } from 'solid-app-router'

import { PostList } from '~/components/post'
import { Content } from '~/components/ui'
import { Data } from './blog.data'

export default function Blog() {
  const data = useData<Resource<Data>>()
  return (
    <Content>
      {JSON.stringify(data(), null, 2)}
      {/*<PostList data={data} />*/}
    </Content>
  )
}

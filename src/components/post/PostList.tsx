import { createResource, For, Suspense } from 'solid-js'
import { request, gql } from 'graphql-request'

import { Title } from '~/components/ui'
import PostSlider from './PostSlider'
import PostCard from './PostCard'

const API_URL = 'http://pdkranj.local/graphql'

const fetchData = async () => {
  const data = await request(
    API_URL,
    gql`
      query HomePage {
        posts {
          edges {
            node {
              uri
              date
              title
              excerpt
              featuredImage {
                node {
                  id
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `
  )
  return data
}

const PostList = () => {
  const [data] = createResource(fetchData)

  return (
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <Title>Posts</Title>
        <Suspense
          fallback={
            <div class="text-center text-gray-800">Loading posts ...</div>
          }
        >
          <PostSlider posts={data()?.posts?.edges} />
          <For each={data()?.posts?.edges}>
            {({ node: post }: any) => <PostCard post={post} />}
          </For>
        </Suspense>
      </div>
    </section>
  )
}

export default PostList

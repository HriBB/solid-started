import { For, Suspense } from 'solid-js'
//import { request, gql } from 'graphql-request'

import { Title } from '~/components/ui'
//import PostSlider from './PostSlider'
import PostCard from './PostCard'

const PostList = (props: any) => {
  return (
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <Title>Blog</Title>
        <Suspense
          fallback={
            <div class="text-center text-gray-800">Loading posts ...</div>
          }
        >
          {/*<PostSlider posts={data()?.posts?.edges} />*/}
          <For each={props.data()?.posts?.edges}>
            {({ node: post }: any) => <PostCard post={post} />}
          </For>
        </Suspense>
      </div>
    </section>
  )
}

export default PostList

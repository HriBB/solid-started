import { createMemo, For, onMount } from 'solid-js'
import Swiper, { Navigation, Pagination } from 'swiper'

import type { Post } from '../types'

Swiper.use([Navigation, Pagination])

type Props = {
  posts: { node: Post }[]
}

const PostSlider = (props: Props) => {
  //let swiper: Swiper
  let container: HTMLDivElement | undefined
  let pagination: HTMLDivElement | undefined
  let prev: HTMLDivElement | undefined
  let next: HTMLDivElement | undefined

  onMount(() => {
    if (container) {
      new Swiper(container, {
        initialSlide: 0,
        loop: true,
        pagination: {
          el: pagination,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      })
    }
  })

  const posts = createMemo(() => {
    return props.posts
      ?.map(({ node: post }) => post)
      .filter((post) => !!post.featuredImage)
  })

  return (
    <div ref={container} class="swiper-container text-gray-800 h-60">
      <div class="swiper-wrapper">
        <For each={posts()}>
          {(post) => (
            <div class="swiper-slide">
              <img
                src={post.featuredImage?.node?.sourceUrl}
                alt={post.featuredImage?.node?.altText}
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </For>
      </div>
      <div ref={pagination} class="swiper-pagination"></div>
      <div ref={prev} class="swiper-button-prev"></div>
      <div ref={next} class="swiper-button-next"></div>
    </div>
  )
}

export default PostSlider

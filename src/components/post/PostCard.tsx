import type { Post } from '../types'

type Props = {
  post: Post
}

const PostCard = (props: Props) => {
  return (
    <div class="relative m-4 text-gray-800 border border-gray-120">
      {props.post.featuredImage && (
        <img
          src={props.post.featuredImage?.node?.sourceUrl}
          alt={props.post.featuredImage?.node?.altText}
          loading="lazy"
        />
      )}
      <div class="p-6">
        <h3 class="w-full mb-2 text-2xl font-bold leading-tight">
          {props.post.title}
        </h3>
        <div innerHTML={props.post.excerpt} />
      </div>
    </div>
  )
}

export default PostCard

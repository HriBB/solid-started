export type Image = {
  id: string
  altText: string
  sourceUrl: string
}

export type Post = {
  uri: string
  date: string
  title: string
  excerpt: string
  featuredImage: { node: Image }
}
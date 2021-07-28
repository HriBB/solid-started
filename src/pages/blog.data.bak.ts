import { createResource } from 'solid-js'
import { request, gql } from 'graphql-request'

const API_URL = 'http://pdkranj.local/graphql'

const fetchData = async () => {
  console.log('fetchData')
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

export default function BlogData() {
  const [data] = createResource(fetchData)
  return data
}

import { useParams } from 'solid-app-router'
import { Content, Title } from '~/components/ui'

export default function BlogPost() {
  const params = useParams()
  return (
    <Content>
      <Title>Single Post ID {params.id}</Title>
    </Content>
  )
}

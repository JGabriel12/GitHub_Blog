import { IssuePostProps } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { IssuePostContainer } from './style'

interface PostProps {
  post: IssuePostProps
}

export function IssuePost({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <IssuePostContainer to={`/issue/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </IssuePostContainer>
  )
}

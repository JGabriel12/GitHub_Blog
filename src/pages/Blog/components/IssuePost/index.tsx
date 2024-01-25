import { IssuePostProps } from '../..'
import { dateFormatter } from '../../../../utils/formatter'
import { IssuePostContainer } from './style'

interface PostProps {
  post: IssuePostProps
}

export function IssuePost({ post }: PostProps) {
  return (
    <IssuePostContainer to={`/issue/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{dateFormatter.format(new Date(post.created_at))}</span>
      </div>
      <p>{post.body}</p>
    </IssuePostContainer>
  )
}

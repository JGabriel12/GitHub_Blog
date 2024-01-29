import { IssueContentContainer } from './style'
import ReactMarkDown from 'react-markdown'

interface IssueContentProps {
  content: string
}

export function IssueContent({ content }: IssueContentProps) {
  return (
    <IssueContentContainer>
      <ReactMarkDown children={content} />
    </IssueContentContainer>
  )
}

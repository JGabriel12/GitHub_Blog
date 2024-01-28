import {
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from 'phosphor-react'
import { IssueHeaderContainer } from './style'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useNavigate } from 'react-router-dom'
import { IssuePostProps } from '../../../Blog'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface IssuePostHeaderProps {
  issuePostContent: IssuePostProps
}

export function IssueHeader({ issuePostContent }: IssuePostHeaderProps) {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1) // -1 equivale a voltar uma rota, voltando assim para a home.
  }

  const formattedData = relativeDateFormatter(issuePostContent?.created_at)

  return (
    <IssueHeaderContainer>
      <header>
        <ExternalLink
          onClick={goBack}
          variant="iconLeft"
          icon={<CaretLeft />}
          text="Voltar"
        />
        <ExternalLink text="Ver no GitHub" href="#" target="_blank" />
      </header>
      <h1>{issuePostContent.title} </h1>
      <ul>
        <li>
          <GithubLogo weight="fill" />
          {issuePostContent.user?.login}
        </li>
        <li>
          <CalendarBlank weight="fill" />
          {formattedData}
        </li>
        <li>
          <ChatCircle weight="fill" /> {issuePostContent.comments} comentários
        </li>
      </ul>
    </IssueHeaderContainer>
  )
}

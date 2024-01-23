import {
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from 'phosphor-react'
import { IssueHeaderContainer } from './style'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useNavigate } from 'react-router-dom'

export function IssueHeader() {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1) // -1 equivale a voltar uma rota, voltando assim para a home.
  }

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
      <h1>JavaScript data types and data structures </h1>
      <ul>
        <li>
          <GithubLogo weight="fill" /> cameronwll
        </li>
        <li>
          <CalendarBlank weight="fill" /> Há 1 dia
        </li>
        <li>
          <ChatCircle weight="fill" /> 5 comentários
        </li>
      </ul>
    </IssueHeaderContainer>
  )
}

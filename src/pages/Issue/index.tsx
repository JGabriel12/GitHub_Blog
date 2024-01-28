import { useEffect, useState } from 'react'
import { IssueContent } from './components/IssueContent'
import { IssueHeader } from './components/IssueHeader'
import { IssuePostProps } from '../Blog'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

const username = 'JGabriel12' // Pode usar .env
const repoName = 'GitHub_Blog' // Pode usar .env

export function Issue() {
  const [issuePostData, setIssuePostData] = useState<IssuePostProps>(
    {} as IssuePostProps
  )
  const { id } = useParams()

  async function getIssuePostsDetails() {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    )

    setIssuePostData(response.data)
  }

  useEffect(() => {
    getIssuePostsDetails()
  }, [])

  return (
    <>
      <IssueHeader issuePostContent={issuePostData} />
      <IssueContent />
    </>
  )
}

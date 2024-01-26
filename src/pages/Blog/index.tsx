import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IssuePost } from './components/IssuePost'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './style'

const username = 'JGabriel12' // Pode usar .env
const repoName = 'GitHub_Blog' // Pode usar .env
export interface IssuePostProps {
  title: string
  body: string
  created_at: string
  html_url: string
  number: number
  user: {
    login: string
  }
}

export function Blog() {
  const [issuePosts, setIssuePosts] = useState<IssuePostProps[]>([])

  async function getIssuePosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`
    )

    setIssuePosts(response.data.items)
  }

  useEffect(() => {
    getIssuePosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput
        getIssuePosts={getIssuePosts}
        postsLength={issuePosts.length}
      />
      <PostsListContainer>
        {issuePosts.map(post => (
          <IssuePost key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  )
}

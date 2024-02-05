// Blog.tsx
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IssuePost } from './components/IssuePost'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './style'
import { Pagination } from '../../components/Pagination'

const username = 'JGabriel12' // Pode usar .env
const repoName = 'GitHub_Blog' // Pode usar .env

export interface IssuePostProps {
  title: string
  body: string
  created_at: string
  html_url: string
  comments: string
  number: number
  user: {
    login: string
  }
}

export function Blog() {
  const [issuePosts, setIssuePosts] = useState<IssuePostProps[]>([])
  const [visiblePosts, setVisiblePosts] = useState<IssuePostProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  async function getIssuePosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`
    )

    setIssuePosts(response.data.items)
  }

  useEffect(() => {
    getIssuePosts()
  }, [])

  useEffect(() => {
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = issuePosts.slice(firstPostIndex, lastPostIndex)
    setVisiblePosts(currentPosts)
  }, [issuePosts, currentPage])

  return (
    <>
      <Profile />
      <SearchInput
        getIssuePosts={getIssuePosts}
        postsLength={issuePosts.length}
      />
      <PostsListContainer>
        {visiblePosts.map(post => (
          <IssuePost key={post.number} post={post} />
        ))}
      </PostsListContainer>
      <Pagination
        data={issuePosts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

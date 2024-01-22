import { IssuePost } from './components/IssuePost'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './style'

export function Blog() {
  return (
    <div className="container">
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <IssuePost />
        <IssuePost />
        <IssuePost />
        <IssuePost />
        <IssuePost />
        <IssuePost />
      </PostsListContainer>
    </div>
  )
}

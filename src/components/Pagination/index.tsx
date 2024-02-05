import { ButtonStyle, IconStyle, PaginationContainer } from './style'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { IssuePostProps } from '../../pages/Blog'

interface PaginationProps {
  data: IssuePostProps[]
  currentPage: number
  setCurrentPage: (page: number) => void
}

export function Pagination({
  data,
  currentPage,
  setCurrentPage
}: PaginationProps) {
  const postsPerPage = 6

  const totalPosts = data.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const renderPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <ButtonStyle key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </ButtonStyle>
      )
    }
    return buttons
  }

  return (
    <PaginationContainer>
      <IconStyle onClick={handleClickPrevious} disabled={currentPage === 1}>
        <CaretLeft />
      </IconStyle>

      {renderPageButtons()}

      <IconStyle
        onClick={handleClickNext}
        disabled={currentPage === totalPages}
      >
        <CaretRight />
      </IconStyle>
    </PaginationContainer>
  )
}

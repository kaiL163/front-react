import { useState } from 'react'
import { Card } from '../components/Card/Card'
import { Header } from '../components/Header/Header'
import { useAllCharacters } from '../hooks/useAllCharacters'
import { Paginator } from '../components/Shared/Paginator/paginator'

export const Home = () => {
  const [page, setPage] = useState(1)
  const {data: charactersData, isFetching} = useAllCharacters({page: page})

  return (
    <div className='page'>
      <div className="cardWrapper">
        {!isFetching ? charactersData?.results?.map(el => {
							return (
								<Card data={el} />
							)
						}) : <>Loading...</>}
      </div>
      <Paginator
        pages={charactersData?.info?.pages}
        pressHandler={setPage}
        prev = {charactersData?.info?.prev}
        next = {charactersData?.info?.next}
        {...{page}}
      />
    </div>
  )
}

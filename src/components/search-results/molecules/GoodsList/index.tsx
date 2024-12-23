import GoodsListItem from '../../atoms/GoodsListItem'
import * as S from './style'
import { useSearch } from '@/utils/SearchContext'

interface data {
  productId: number
  title: string
  imageUrl: string
  price: number
  like: number
}

const GoodsList = () => {
  const { searchResults } = useSearch()
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderText>검색 결과</S.HeaderText>
      </S.HeaderWrapper>
      <S.GoodsListContainer>
        {searchResults.map((item) => (
          <GoodsListItem
            key={item.productId}
            title={item.title}
            imageURL={item.imageUrl}
            price={item.price}
            like={item.like}
            id={item.productId}
          />
        ))}
      </S.GoodsListContainer>
    </S.Wrapper>
  )
}

export default GoodsList

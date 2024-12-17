import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 2.1875rem;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeaderText = styled.p`
  ${theme.text.title.largeM}
`

export const GoodsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px 30px;
  width: 100%;
`

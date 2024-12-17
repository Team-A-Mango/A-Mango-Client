import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const ItemWrapper = styled.div`
  padding: 14px 16px;
  background-color: ${theme.color.white};
  border-radius: 14px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TextTitleData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.p`
  ${theme.text.body.mediumR}
`
export const PriceText = styled.p`
  ${theme.text.title.mediumB}
`

export const SelectText = styled.p`
  color: ${theme.color.gray[800]};
  ${theme.text.caption1.mediumR}
`

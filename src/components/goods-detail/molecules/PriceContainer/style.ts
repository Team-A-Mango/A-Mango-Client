import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrappeer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceText = styled.p`
  color: ${theme.color.gray[800]};
  ${theme.text.body.mediumR};
`

export const DeleteButton = styled.div`
  display: flex;
  border: 1px solid #ed3434;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  color: #ed3434;
`

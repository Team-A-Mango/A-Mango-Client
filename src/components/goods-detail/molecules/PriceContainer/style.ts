import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrappeer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PriceText = styled.p`
  color: ${theme.color.gray[800]};
  ${theme.text.body.mediumR};
`

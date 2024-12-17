import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

export const Title = styled.p`
  ${theme.text.title.smallB}
  display: block;
  margin-bottom: 24px;
`

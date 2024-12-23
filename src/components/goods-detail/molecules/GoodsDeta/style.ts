import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`

export const Title = styled.p`
  color: ${theme.color.black};
  ${theme.text.title.biggest};
`

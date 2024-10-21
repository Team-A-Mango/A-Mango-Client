import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Button = styled.button`
  width: 100%;
  background-color: ${theme.color.main[800]};
  align-items: center;
  color: ${theme.color.white};
  ${theme.text.body.largeB}
  padding: 1.5rem 1.75rem;
  border-radius: 1rem;
`

import styled from '@emotion/styled'
import theme from '@/styles/theme'

// Define the props for the styled button
interface ButtonProps {
  type?: 'default' | 'min' // Optional type prop
}

// Use ButtonProps in the styled definition
export const Button = styled.button<ButtonProps>`
  width: 100%;
  background-color: ${({ type = 'default' }) =>
    type === 'min' ? theme.color.main2[800] : theme.color.main[800]};
  align-items: center;
  color: ${theme.color.white};
  ${theme.text.body.largeB}
  padding: 1.5rem 1.75rem;
  border-radius: 1rem;
  white-space: nowrap;
`

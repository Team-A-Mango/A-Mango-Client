import styled from '@emotion/styled'

export const Button = styled.button`
  ${({ theme }) => theme.text.body.largeB}
  background-color: ${({ theme }) => theme.color.main2[300]};
  color: ${({ theme }) => theme.color.black};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.main[400]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.main[200]};
  }
`

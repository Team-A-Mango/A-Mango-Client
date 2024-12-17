import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

export const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const RouteLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

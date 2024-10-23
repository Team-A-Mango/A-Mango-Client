import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const EmailContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const EmailButton = styled.button`
  width: 100%;
  background-color: ${theme.color.main[800]};
  align-items: center;
  color: ${theme.color.white};
  ${theme.text.body.largeB}
  padding: 1.5rem 2.3125rem;
  border-radius: 1rem;
  text-align: center;
  white-space: nowrap;
`
export const EmailInputContainer = styled.div`
  flex: 4;
`

export const EmailButtonWrapper = styled.div`
  flex: 1;
`

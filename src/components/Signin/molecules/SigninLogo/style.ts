import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    @media (max-width: 460px) {
      width: 80%;
    }
  }
`

export const Title = styled.p`
  ${theme.text.title.largeM};
  color: ${theme.color.main[800]};
  text-align: center;
`

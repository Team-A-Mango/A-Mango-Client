import styled from '@emotion/styled'
import React from 'react'
import { FooterLogo } from '@/assets/svg'
import theme from '@/styles/theme'

const Footer = () => {
  return (
    <Wrapper>
      <FooterLogo />
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  width: 100%;
  height: 144px;
  background-color: ${theme.color.main[500]};
  display: flex;
  justify-content: center;
  align-items: center;
`

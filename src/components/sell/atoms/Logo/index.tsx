import styled from '@emotion/styled'
import React from 'react'
import { MangoMini } from '@/assets/svg'
import theme from '@/styles/theme'

const Logo = () => {
  return (
    <LogoContainer>
      <MangoMini />
      <Text>상품 판매하기</Text>
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Text = styled.p`
  ${theme.text.title.largeM}
  color: ${theme.color.black}
`

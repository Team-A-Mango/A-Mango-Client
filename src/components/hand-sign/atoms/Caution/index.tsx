import styled from '@emotion/styled'
import React from 'react'
import theme from '@/styles/theme'

const Caution = () => {
  return (
    <Container>
      <Text>주의 사항</Text>
      <SubText>
        상품은 손실 우려가 있으니 반드시 잊지 마세요! 마이페이지에서 상품 상태를
        확인하실 수 있습니다.
      </SubText>
    </Container>
  )
}

export default Caution

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`

const Text = styled.p`
  ${theme.text.title.smallB}
  color: ${theme.color.main[800]};
`

const SubText = styled.p`
  ${theme.text.body.mediumR}
  color: ${theme.color.gray[500]};
`

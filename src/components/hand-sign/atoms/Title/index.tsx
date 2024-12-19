import styled from '@emotion/styled'
import React from 'react'
import theme from '@/styles/theme'

const Title = () => {
  return (
    <Container>
      <Text>안 입는 옷 팔아요</Text>
      <SubText>구매 완료가 되었습니다.</SubText>
    </Container>
  )
}

export default Title

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`

const Text = styled.p`
  ${theme.text.title.mediumB}
  color: ${theme.color.gray[700]};
`

const SubText = styled.p`
  ${theme.text.title.largeM}
  color: ${theme.color.black};
`

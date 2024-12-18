import styled from '@emotion/styled'
import React from 'react'
import theme from '@/styles/theme'

const TypeText = ({ content }: { content: string }) => {
  return <Text>{content}</Text>
}

export default TypeText

const Text = styled.p`
  ${theme.text.body.largeR}
  color: ${theme.color.black}
`

import React from 'react'
import * as S from './style'

interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return <S.Button>{text}</S.Button>
}

export default Button

import React from 'react'
import * as S from './style'

interface Props {
  text: string
  type?: 'default' | 'min' // Optional type prop
}

const Button = ({ text, type = 'default' }: Props) => {
  return <S.Button type={type}>{text}</S.Button>
}

export default Button

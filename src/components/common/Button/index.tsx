import React from 'react'
import * as S from './style'

interface Props {
  text: string
  type?: 'default' | 'min'
  onClick?: () => void // onclick을 onClick으로 변경하고 옵셔널로 설정
}

const Button = ({ text, type = 'default', onClick }: Props) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {text}
    </S.Button>
  )
}

export default Button

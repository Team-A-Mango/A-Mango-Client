import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface Props {
  text: string
  type: string
  placeholder: string
}

const FormItem = ({ text, type, placeholder }: Props) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <Input type={type} placeholder={placeholder} />
    </S.Wrapper>
  )
}

export default FormItem

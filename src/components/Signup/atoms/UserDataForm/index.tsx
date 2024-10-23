import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

const UserDataForm = () => {
  return (
    <S.Wrapper>
      <Input type='number' placeholder='학번을 입력해주세요' />
      <Input type='text' placeholder='이름을 입력해주세요' />
    </S.Wrapper>
  )
}

export default UserDataForm

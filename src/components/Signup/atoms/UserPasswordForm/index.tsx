import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

const UserPasswordForm = () => {
  return (
    <S.Wrapper>
      <Input
        type='password'
        placeholder='영문, 숫자, 특수문자 포함 8~20자로 입력해주세요'
      />
      <Input type='password' placeholder='비밀번호 확인하기' />
    </S.Wrapper>
  )
}

export default UserPasswordForm

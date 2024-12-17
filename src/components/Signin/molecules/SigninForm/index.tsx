import React from 'react'
import UserEmailForm from '../../atoms/UserEmailForm'
import UserPasswordForm from '../../atoms/UserPasswordForm'
import * as S from './style'

const SigninForm = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Title>학교 이메일 입력하기</S.Title>
        <UserEmailForm />
      </div>
      <div>
        <S.Title>비밀번호 입력하기</S.Title>
        <UserPasswordForm />
      </div>
    </S.Wrapper>
  )
}

export default SigninForm

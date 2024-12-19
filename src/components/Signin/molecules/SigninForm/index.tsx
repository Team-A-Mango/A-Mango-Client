import React from 'react'
import UserEmailForm from '../../atoms/UserEmailForm'
import UserPasswordForm from '../../atoms/UserPasswordForm'
import * as S from './style'

interface SigninFormProps {
  setEmailState: React.Dispatch<React.SetStateAction<string>>
  setPasswordState: React.Dispatch<React.SetStateAction<string>>
}

const SigninForm: React.FC<SigninFormProps> = ({
  setEmailState,
  setPasswordState,
}) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordState(e.target.value)
  }

  return (
    <S.Wrapper>
      <div>
        <S.Title>학교 이메일 입력하기</S.Title>
        <UserEmailForm onChange={handleEmailChange} />
      </div>
      <div>
        <S.Title>비밀번호 입력하기</S.Title>
        <UserPasswordForm onChange={handlePasswordChange} />
      </div>
    </S.Wrapper>
  )
}

export default SigninForm

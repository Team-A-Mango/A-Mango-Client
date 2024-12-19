import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SigninForm from '../../molecules/SigninForm'
import SigninLogo from '../../molecules/SigninLogo'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'

const SigninItem: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleButton = () => {
    try {
      authInstance.post('/auth/login', {
        email,
        password,
      })
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <S.Wrapper>
      <SigninLogo />
      <SigninForm setEmailState={setEmail} setPasswordState={setPassword} />
      <S.ButtonContainer>
        <Button text='확인' onClick={handleButton} />
        <S.RouteLink href='signup'>회원가입하기</S.RouteLink>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default SigninItem

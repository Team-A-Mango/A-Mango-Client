import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SigninForm from '../../molecules/SigninForm'
import SigninLogo from '../../molecules/SigninLogo'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'

interface LoginResponse {
  accessToken: string
  refreshToken: string
  accessTokenExpiresIn: string
  refreshTokenExpiresIn: string
}

const SigninItem: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleButton = async () => {
    try {
      const response = await authInstance.post<LoginResponse>('/auth/login', {
        email,
        password,
      })

      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      router.push('/')
    } catch (error) {
      console.error('로그인 실패:', error)
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
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

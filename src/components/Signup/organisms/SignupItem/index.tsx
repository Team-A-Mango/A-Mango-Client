import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SignupLogo from '../../molecules/SigniupLogo'
import SignupForm from '../../molecules/SignupForm'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'

const SignupItem = () => {
  const [img, setImg] = useState<File | null>(null)
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
  const router = useRouter()

  const handleButton = async () => {
    if (checkPassword !== password) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      const formData = new FormData()

      if (img) {
        formData.append('image', img)
      }

      const requestData = {
        email,
        phone: number,
        nickName: name,
        password,
      }

      formData.append('request', JSON.stringify(requestData))

      const response = await authInstance.post('/auth', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        router.push('/')
      } else {
        console.error('회원가입 실패', response)
      }
    } catch (error) {
      console.error('오류 발생', error)
    }
  }

  return (
    <S.Wrapper>
      <SignupLogo />
      <SignupForm
        img={img}
        setImg={setImg}
        setEmail={setEmail}
        setName={setName}
        setNumber={setNumber}
        setPassword={setPassword}
        setCheckPassword={setCheckPassword}
      />
      <S.ButtonContainer>
        <Button onClick={handleButton} text='확인' />
        <S.RouteLink href='/signin'>로그인하기</S.RouteLink>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default SignupItem

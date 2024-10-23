import React from 'react'
import * as S from './style'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'

const UserEmailForm = () => {
  return (
    <S.Wrapper>
      <S.EmailContainer>
        <S.EmailInputContainer>
          <Input type='email' placeholder='@gsm.hs.kr' />
        </S.EmailInputContainer>
        <S.EmailButtonWrapper>
          <S.EmailButton>인증번호</S.EmailButton>
        </S.EmailButtonWrapper>
      </S.EmailContainer>
      <Input type='number' placeholder='이메일 인증하기' />
      <Button text='인증 확인' />
    </S.Wrapper>
  )
}

export default UserEmailForm

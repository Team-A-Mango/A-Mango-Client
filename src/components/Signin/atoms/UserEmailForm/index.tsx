import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

const UserEmailForm = () => {
  return (
    <S.Wrapper>
      <S.EmailContainer>
        <S.EmailInputContainer>
          <Input type='email' placeholder='@gsm.hs.kr' />
        </S.EmailInputContainer>
      </S.EmailContainer>
    </S.Wrapper>
  )
}

export default UserEmailForm

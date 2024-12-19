import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserEmailForm: React.FC<Props> = ({ onChange }) => {
  return (
    <S.Wrapper>
      <S.EmailContainer>
        <S.EmailInputContainer>
          <Input onChange={onChange} type='email' placeholder='@gsm.hs.kr' />
        </S.EmailInputContainer>
      </S.EmailContainer>
    </S.Wrapper>
  )
}

export default UserEmailForm

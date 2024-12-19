import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface UserPasswordFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserPasswordForm: React.FC<UserPasswordFormProps> = ({ onChange }) => {
  return (
    <S.Wrapper>
      <Input
        onChange={onChange}
        type='password'
        placeholder='영문, 숫자, 특수문자 포함 8~20자로 입력해주세요'
      />
    </S.Wrapper>
  )
}

export default UserPasswordForm

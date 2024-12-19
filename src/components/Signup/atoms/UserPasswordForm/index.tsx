import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface UserPasswordFormProps {
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserPasswordForm: React.FC<UserPasswordFormProps> = ({
  onPasswordChange,
  onPasswordCheckChange,
}) => {
  return (
    <S.Wrapper>
      <Input
        type='password'
        placeholder='영문, 숫자, 특수문자 포함 8~20자로 입력해주세요'
        onChange={onPasswordChange}
      />
      <Input
        type='password'
        placeholder='비밀번호 확인하기'
        onChange={onPasswordCheckChange}
      />
    </S.Wrapper>
  )
}

export default UserPasswordForm

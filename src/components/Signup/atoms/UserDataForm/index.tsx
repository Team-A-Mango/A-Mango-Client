import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface UserDataFormProps {
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  OnchagePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserDataForm: React.FC<UserDataFormProps> = ({
  onNameChange,
  OnchagePhoneNumberChange,
}) => {
  return (
    <S.Wrapper>
      <Input
        type='string'
        placeholder='전화번호를 입력해주세요'
        onChange={OnchagePhoneNumberChange}
      />
      <Input
        type='text'
        placeholder='이름을 입력해주세요'
        onChange={onNameChange}
      />
    </S.Wrapper>
  )
}

export default UserDataForm

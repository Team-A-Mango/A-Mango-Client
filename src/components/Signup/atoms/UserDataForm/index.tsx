import React from 'react'
import * as S from './style'
import Input from '@/components/common/Input'

interface UserDataFormProps {
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserDataForm: React.FC<UserDataFormProps> = ({
  onNameChange,
  onNumberChange,
}) => {
  return (
    <S.Wrapper>
      <Input
        type='number'
        placeholder='학번을 입력해주세요'
        onChange={onNumberChange}
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

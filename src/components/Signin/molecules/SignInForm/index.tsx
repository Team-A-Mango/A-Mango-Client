import React from 'react'
import FormItem from '../../atoms/FormItem'
import * as S from './style'
import Button from '@/components/common/Button'

const SignInForm = () => {
  return (
    <S.Wrapper>
      <FormItem
        text='학교 이메일 입력하기'
        type='email '
        placeholder='이메일를 입력해주세요'
      />
      <FormItem
        text='비밀번호 입력하기'
        type='password '
        placeholder='비밀번호를 입력해주세요s'
      />
      <Button text='확인' />
    </S.Wrapper>
  )
}

export default SignInForm

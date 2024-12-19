import React from 'react'
import UserDataForm from '../../atoms/UserDataForm'
import UserEmailForm from '../../atoms/UserEmailForm'
import UserPasswordForm from '../../atoms/UserPasswordForm'
import * as S from './style'
import ImageInput from '@/components/common/ImageInput'

interface SignupFormProps {
  img: File | null
  setImg: React.Dispatch<React.SetStateAction<File | null>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setCheckPassword: React.Dispatch<React.SetStateAction<string>>
}

const SignupForm: React.FC<SignupFormProps> = ({
  img,
  setImg,
  setEmail,
  setName,
  setPhone,
  setPassword,
  setCheckPassword,
}) => {
  const OnchageEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const OnchageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const OnchagePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const OnchagePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckPassword(e.target.value)
  }
  const OnchagePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  return (
    <S.Wrapper>
      <div>
        <S.Title>얼굴 사진 등록하기</S.Title>
        <ImageInput img={img} setImg={setImg} />
      </div>
      <div>
        <S.Title>학교 이메일 입력하기</S.Title>
        <UserEmailForm onChange={OnchageEmailChange} />
      </div>
      <div>
        <S.Title>전화번호와 이름 입력하기</S.Title>
        <UserDataForm
          onNameChange={OnchageNameChange}
          OnchagePhoneNumberChange={OnchagePhoneNumberChange}
        />
      </div>
      <div>
        <S.Title>비밀번호 입력하기</S.Title>
        <UserPasswordForm
          onPasswordChange={OnchagePasswordChange}
          onPasswordCheckChange={OnchagePasswordCheckChange}
        />
      </div>
    </S.Wrapper>
  )
}

export default SignupForm

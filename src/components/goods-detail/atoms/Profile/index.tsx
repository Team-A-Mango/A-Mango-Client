import Image from 'next/image'
import React from 'react'
import * as S from './style'
import TestImg from '@/assets/png/TestImg.png'
interface Props {
  profileImg: string | undefined
  author: string
}

const Profile = ({ profileImg, author }: Props) => {
  return (
    <S.ProfileContainer>
      <S.Profile>
        <Image
          src={profileImg || TestImg}
          alt='프로필 이미지'
          width={42}
          height={42}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </S.Profile>
      <S.NameText>{author}</S.NameText>
    </S.ProfileContainer>
  )
}

export default Profile

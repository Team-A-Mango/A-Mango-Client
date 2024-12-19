import Image from 'next/image'
import React from 'react'
import * as S from './style'
import TestImg from '@/assets/png/TestImg.png'

const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.Profile>
        <Image
          src={TestImg}
          alt='프로필 이미지 테스트'
          width={42}
          height={42}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </S.Profile>
      <S.NameText>김진원</S.NameText>
    </S.ProfileContainer>
  )
}

export default Profile

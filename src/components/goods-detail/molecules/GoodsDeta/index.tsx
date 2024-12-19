import React from 'react'
import Profile from '../../atoms/Profile'
import * as S from './style'
interface Props {
  title: string
  profileImg: string | undefined
  author: string
}

const GoodsDeta = ({ title, profileImg, author }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <Profile profileImg={profileImg} author={author} />
    </S.Container>
  )
}

export default GoodsDeta

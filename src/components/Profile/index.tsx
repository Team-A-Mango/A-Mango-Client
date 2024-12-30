import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'
import TestImg from '@/assets/png/TestImg.png'
import { Mango, Setting, Wave } from '@/assets/svg'

interface Me {
  nickname: string
  email: string
  profile: string
  phone: string
}

const Profile = () => {
  const [info, setInfo] = useState<Me | null>()
  const nav = useRouter()
  const getMyInfo = async () => {
    try {
      const myInfo = await authInstance.get('/my/info')
      setInfo(myInfo.data)
    } catch (err) {
      console.log(err)
    }
  }
  const logout = () => {
    authInstance.delete('/auth')
    localStorage.clear()
    alert('로그아웃 되었습니다')
    nav.push('/')
  }

  useEffect(() => {
    getMyInfo()
  }, [])

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.Profile>
          <S.TopBox>
            <S.ProfileImg>
              <Image
                width={100}
                height={100}
                src={info?.profile || TestImg}
                alt='아무사진'
              />
            </S.ProfileImg>
            <S.Name>{info?.nickname}</S.Name>
          </S.TopBox>
          <S.BtmBox>
            <S.Text>
              <h2>전화번호</h2> {info?.phone}
            </S.Text>
            <S.Text>
              <h2>이메일</h2> {info?.email}
            </S.Text>
            <S.Text onClick={logout}>
              <h3>로그아웃</h3>
            </S.Text>
          </S.BtmBox>
        </S.Profile>
        <S.Setting>
          <Setting />
          설정
        </S.Setting>
      </S.ProfileWrapper>
      <S.Evaluation>
        <Mango />
        <Wave />
        <S.Temperature>5℃</S.Temperature>
      </S.Evaluation>
    </S.Container>
  )
}

export default Profile

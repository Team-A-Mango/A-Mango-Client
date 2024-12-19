import React, { useEffect, useState } from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'
import { Mango, Setting, Wave } from '@/assets/svg'

interface Me {
  nickname: string
  email: string
  profile: string
  phone: string
}

const Profile = () => {
  const [info, setInfo] = useState<Me | null>()
  const getMyInfo = async () => {
    try {
      const myInfo = await authInstance.get('/my/info')
      setInfo(myInfo.data)
    } catch (err) {
      console.log(err)
    }
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
              <img src={info?.profile} alt='아무사진' />
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

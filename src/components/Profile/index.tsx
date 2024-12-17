import React from 'react'
import * as S from './style'
import { Mango, Setting, Wave } from '@/assets/svg'
const Profile = () => {
  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.Profile>
          <S.TopBox>
            <S.ProfileImg>
              <img
                src='https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg'
                alt='아무사진'
              />
            </S.ProfileImg>
            <S.Name>김진원</S.Name>
          </S.TopBox>
          <S.BtmBox>
            <S.Text>
              <h2>온도</h2> 5℃
            </S.Text>
            <S.Text>
              <h2>학번</h2> 2405
            </S.Text>
            <S.Text>
              <h2>이메일</h2> s23059@gsm.hs.kr
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

import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  gap: 5.0625rem;
`

export const ProfileWrapper = styled.div`
  display: flex;
  height: 17.125rem;
  padding: 1.875rem 3.125rem;
  align-items: flex-start;
  gap: 15rem;
  align-self: stretch;
  border-radius: 1rem;
  background: #fff;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
`

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.625rem;
`

export const ProfileImg = styled.div`
  border-radius: 5rem;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    object-fit: cover;
    object-position: center;
  }
`

export const BtmBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Name = styled.h1`
  color: #121212;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 1.65rem */
`

export const Text = styled.span`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  color: #bdbdbd;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 1.35rem */
  h2 {
    color: #121212;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 1.35rem */
  }
`

export const Setting = styled.span`
  display: flex;
  align-items: center;
  color: #bdbdbd;
  gap: 0.625rem;
`

export const Evaluation = styled.div`
  display: flex;
  height: 17.125rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2.7rem;
  position: relative;
  border-radius: 1rem;
  background: #fff;
`

export const Temperature = styled.h2`
  color: #121212;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  position: absolute;
  bottom: 1.37rem;
`

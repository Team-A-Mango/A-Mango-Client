import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Profile = styled.div`
  border-radius: 50%;
  width: 42px;
  height: 42px;
`

export const NameText = styled.p`
  color: ${theme.color.black};
  ${theme.text.body.mediumR};
`

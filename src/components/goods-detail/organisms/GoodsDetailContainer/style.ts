import styled from '@emotion/styled'
import Image from 'next/image'
import theme from '@/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  flex: 1;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  width: 1280px;
  gap: 4.44rem;
`

export const GoodsDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 58px;
`

export const Img = styled(Image)`
  border-radius: 1rem;
  border: 1px solid #ececec;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 40rem;
`

export const LikeContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
`
export const LikeText = styled.div`
  color: #ababab;
`

export const CommentButton = styled.button`
  display: flex;
  width: 100%;
  padding: 1.25rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1rem;
  background: white;
  color: #ababab;
  border: 1px solid #ababab;
  ${theme.text.body.regular}
`

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`

export const CommentTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 80vw;
  align-items: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  color: #a7a7a7;
  gap: 0.5rem;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #121212;
  }
`

export const CommentInputWrapper = styled.form`
  display: flex;
  padding: 1.5rem 2rem;
  gap: 0.625rem;
  background: #fff;
  align-items: center;
  border-radius: 1rem;
`
export const CommentProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-right: 0.75rem;

  h2 {
    color: #d5d5d5;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`

export const CommentInput = styled.input`
  padding-left: 0 0.75rem;
  width: 55rem;
  :focus {
    color: #5f5f5f;
  }
`

export const CommentList = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  gap: 1.25rem;
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    width: 38vw;
    color: #121212;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`

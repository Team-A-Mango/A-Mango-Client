import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.88rem;
`

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  flex-shrink: 0;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: #7b7b7b;

  h2 {
    color: #121212;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
`

export const GoodsList = styled.div`
  display: flex;
  width: 100%;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Arrow = styled.div`
  position: absolute;
  right: 2rem;
`

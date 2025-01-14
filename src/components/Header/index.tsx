import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'
import { LogoSmall, Person, Plus } from '@/assets/svg'
import SearchBar from '@/components/SearchBar'

const Header = () => {
  const nav = useRouter()
  const pathname = usePathname()

  const isActivePage = (path: string) => pathname === path

  const [searchData, setSearchData] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const getName = async () => {
      try {
        const userInfo = await authInstance.get('/my/info')
        setName(userInfo.data.nickname)
      } catch (err) {
        console.log(err)
      }
    }

    // 마운트 시 localStorage에 accessToken이 있으면 getName 호출
    if (localStorage.getItem('accessToken')) {
      getName()
    }
  }, []) // 빈 의존성 배열로 설정하여 마운트 시 한 번만 실행

  return (
    <S.Container>
      <span onClick={() => nav.push('/')}>
        <LogoSmall />
      </span>
      <SearchBar searchData={searchData} setSearchData={setSearchData} />
      <S.ButtonWrapper>
        <S.Button
          onClick={() => nav.push('/sell')}
          style={{ color: isActivePage('/sell') ? '#F9AA38' : '#121212' }}
        >
          <Plus fill={isActivePage('/sell') ? '#F9AA38' : '#121212'} />
          판매하기
        </S.Button>
        {name ? (
          <S.Button
            onClick={() => nav.push('/mypage')}
            style={{ color: isActivePage('/mypage') ? '#F9AA38' : '#121212' }}
          >
            <Person fill={isActivePage('/mypage') ? '#F9AA38' : '#121212'} />
            {name}
          </S.Button>
        ) : (
          <>
            <S.Button
              onClick={() => nav.push('/signin')}
              style={{ color: isActivePage('/signin') ? '#F9AA38' : '#121212' }}
            >
              <Person fill={isActivePage('/signin') ? '#F9AA38' : '#121212'} />
              로그인
            </S.Button>
            <S.Button
              onClick={() => nav.push('/signup')}
              style={{ color: isActivePage('/signup') ? '#F9AA38' : '#121212' }}
            >
              <Person fill={isActivePage('/signup') ? '#F9AA38' : '#121212'} />
              회원가입
            </S.Button>
          </>
        )}
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default Header

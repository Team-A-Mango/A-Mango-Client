import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import * as S from './style'
import { LogoSmall, Person, Plus } from '@/assets/svg'
import SearchBar from '@/components/SearchBar'

const Header = () => {
  const nav = useRouter()
  const pathname = usePathname()

  const isActivePage = (path: string) => pathname === path

  const [searchData, setSearchData] = useState('')

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
        <S.Button
          onClick={() => nav.push('/mypage')}
          style={{ color: isActivePage('/mypage') ? '#F9AA38' : '#121212' }}
        >
          <Person fill={isActivePage('/mypage') ? '#F9AA38' : '#121212'} />
          김진원
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default Header

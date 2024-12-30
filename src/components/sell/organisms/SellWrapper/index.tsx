import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Logo from '../../atoms/Logo'
import SellForm from '../../molecules/SellForm'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'
import Header from '@/components/Header'

const SellWrapper = () => {
  const [img, setImg] = useState<File | null>(null)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number | null>(null)
  const [account, setAccount] = useState<string>('')
  const router = useRouter()

  const handleButton = async () => {
    try {
      const formData = new FormData()

      if (img) {
        formData.append('images', img)
      }

      const requestData = {
        title,
        description,
        price,
        account,
      }

      const blob = new Blob([JSON.stringify(requestData)], {
        type: 'application/json',
      })
      formData.append('request', blob, 'request.json')

      await authInstance.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      router.push('/')
    } catch (error) {
      console.error('오류 발생', error)
    }
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <SellForm
            img={img}
            setImg={setImg}
            setTitle={setTitle}
            setDescription={setDescription}
            setPrice={setPrice}
            setAccount={setAccount}
          />
          <Button onClick={handleButton} text='상품 올리기' />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default SellWrapper

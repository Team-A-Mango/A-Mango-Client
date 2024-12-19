import React from 'react'
import TypeText from '../../atoms/TypeText'
import * as S from './style'
import ImageInput from '@/components/common/ImageInput'
import Input from '@/components/common/Input'

interface Props {
  img: File | null
  setImg: React.Dispatch<React.SetStateAction<File | null>>
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setDescription: React.Dispatch<React.SetStateAction<string>>
  setPrice: React.Dispatch<React.SetStateAction<number | null>>
}

const SellForm: React.FC<Props> = ({
  img,
  setImg,
  setTitle,
  setDescription,
  setPrice,
}) => {
  const onChangeTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(e.target.value)
  }

  const onChangePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numberValue = value ? parseFloat(value) : null
    setPrice(numberValue)
  }

  return (
    <S.Wrapper>
      <S.ItemContainer>
        <TypeText content='상품 대표 사진' />
        <ImageInput img={img} setImg={setImg} />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 이름' />
        <Input type='text' onChange={onChangeTitleChange} />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 출고 가격' />
        <Input type='number' onChange={onChangePriceChange} />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 상세 설명' />
        <Input type='text' onChange={onChangeDescriptionChange} />
      </S.ItemContainer>
    </S.Wrapper>
  )
}

export default SellForm

import React from 'react'
import ImageInput from '../../atoms/ImageInput'
import TypeText from '../../atoms/TypeText'
import * as S from './style'
import Input from '@/components/common/Input'

const SellForm = () => {
  return (
    <S.Wrapper>
      <S.ItemContainer>
        <TypeText content='상품 대표 사진' />
        <ImageInput />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 이름' />
        <Input />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 출고 가격' />
        <Input />
      </S.ItemContainer>
      <S.ItemContainer>
        <TypeText content='상품 상세 설명' />
        <Input />
      </S.ItemContainer>
    </S.Wrapper>
  )
}

export default SellForm

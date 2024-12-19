import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import { Picture } from '@/assets/icons'
import theme from '@/styles/theme'

interface ImageInputProps {
  img: File | null
  setImg: React.Dispatch<React.SetStateAction<File | null>>
}

const ImageInput: React.FC<ImageInputProps> = ({ img, setImg }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      setImg(file)
    }
  }

  return (
    <Wrapper htmlFor='imageUpload'>
      <ContentContainer>
        {img ? (
          <ImageContainer>
            <StyledImage
              src={URL.createObjectURL(img)}
              alt='이미지'
              layout='fill'
              objectFit='contain'
            />
          </ImageContainer>
        ) : (
          <>
            <Picture />
            <Input
              type='file'
              id='imageUpload'
              accept='image/*'
              onChange={handleImageChange}
            />
            <Text>사진을 업로드해주세요</Text>
          </>
        )}
      </ContentContainer>
    </Wrapper>
  )
}

export default ImageInput

const Wrapper = styled.label`
  width: 294px;
  height: 208px;
  background-color: ${theme.color.white};
  border-radius: 14px;
  border: 1px solid ${theme.color.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 14px;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const StyledImage = styled(Image)`
  object-fit: contain;
`

const Text = styled.p`
  color: ${theme.color.gray[400]};
  ${theme.text.body.largeR}
`

const Input = styled.input`
  display: none;
`

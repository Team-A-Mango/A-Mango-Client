import styled from '@emotion/styled'
import React from 'react'
import theme from '@/styles/theme'

interface HandSignProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  isSelected: boolean
  onSelect: (text: string) => void
}

const HandSign: React.FC<HandSignProps> = ({
  icon: Icon,
  text,
  isSelected,
  onSelect,
}) => {
  return (
    <Container onClick={() => onSelect(text)} isSelected={isSelected}>
      <Icon />
      <Text>{text}</Text>
    </Container>
  )
}

export default HandSign

const Container = styled.div<{ isSelected: boolean }>`
  width: 202px;
  height: 270px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  cursor: pointer;
  background-color: ${theme.color.white};
  border: 2px solid
    ${(props) => (props.isSelected ? theme.color.black : 'transparent')};
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${theme.color.black};
  }
`

const Text = styled.p`
  ${theme.text.title.largeM}
  color: ${theme.color.black};
`

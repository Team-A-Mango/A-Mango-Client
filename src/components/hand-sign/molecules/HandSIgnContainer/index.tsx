import styled from '@emotion/styled'
import React, { useState } from 'react'
import HandSign from '../../atoms/HandSign'
import { CallSign, OkSign, PeaceSign, RockSign } from '@/assets/svg'

const HandSignContainer = ({
  setSign,
}: {
  setSign: React.Dispatch<React.SetStateAction<string | null>>
}) => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)

  const handleSelect = (text: string) => {
    setSelectedSign(text)
    const Text = text.split(' ')[0].toUpperCase()
    setSign(Text)
  }

  return (
    <Container>
      <HandSign
        icon={CallSign}
        text='Call Sign'
        isSelected={selectedSign === 'Call Sign'}
        onSelect={handleSelect}
      />
      <HandSign
        icon={RockSign}
        text='Rock Sign'
        isSelected={selectedSign === 'Rock Sign'}
        onSelect={handleSelect}
      />
      <HandSign
        icon={PeaceSign}
        text='Peace Sign'
        isSelected={selectedSign === 'Peace Sign'}
        onSelect={handleSelect}
      />
      <HandSign
        icon={OkSign}
        text='Ok Sign'
        isSelected={selectedSign === 'Ok Sign'}
        onSelect={handleSelect}
      />
    </Container>
  )
}

export default HandSignContainer

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

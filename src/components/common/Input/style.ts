import styled from '@emotion/styled'
import theme from '@/styles/theme'

export const InputWrapper = styled.div`
  width: 100%;
`

export const InputLabel = styled.label`
  display: flex;
  cursor: text;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  background-color: #fff;
  padding: 24px 28px;
  border: 1px solid ${theme.color.gray[200]};
`

export const StyledInput = styled.input`
  width: 100%;
  background-color: #fff;
  border: none;
  ${theme.text.body.mediumB}
  &:active {
    border: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  height: 20px;
  width: 20px;
`

'use client'

import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import * as S from './style'
import { Eye, SelectedEye } from '@/assets/icons'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string
  placeholder?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', placeholder, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      props.onChange?.(e)
    }

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevVisible) => !prevVisible)
    }

    const handleIconClick = () => {
      if (type === 'password') togglePasswordVisibility()
    }

    const inputType = type === 'password' && passwordVisible ? 'text' : type

    return (
      <S.InputWrapper>
        <S.InputLabel>
          <S.StyledInput
            {...props}
            type={inputType}
            ref={ref}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
          />
          {inputValue && type === 'password' && (
            <S.IconButton onClick={handleIconClick}>
              {passwordVisible ? <SelectedEye /> : <Eye />}
            </S.IconButton>
          )}
        </S.InputLabel>
      </S.InputWrapper>
    )
  },
)

Input.displayName = 'Input'

export default Input

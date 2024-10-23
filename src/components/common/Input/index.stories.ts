import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const config: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
}

export default config

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: { placeholder: '비밀번호', type: 'password' },
}

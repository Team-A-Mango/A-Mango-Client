import { Meta, StoryObj } from '@storybook/react'
import Test from './Test'

const config: Meta<typeof Test> = {
  title: 'Test',
  component: Test,

  args: {},
}

export default config

type Story = StoryObj<typeof Test>

export const Primary: Story = { args: {} }

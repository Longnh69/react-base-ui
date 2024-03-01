import type { Meta, StoryObj } from '@storybook/react'
import BaseButton from './BaseButton'

const meta = {
  title: 'Example/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: 'bg-primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    className: 'bg-light-596',
    children: 'Button',
  },
}

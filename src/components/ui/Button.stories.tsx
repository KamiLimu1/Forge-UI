import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Continue', variant: 'primary' } }
export const Ghost: Story = { args: { children: 'Back', variant: 'ghost' } }
export const Danger: Story = { args: { children: 'Delete', variant: 'danger' } }
export const Loading: Story = { args: { children: 'Continue', isLoading: true } }
export const FullWidth: Story = { args: { children: 'Continue', fullWidth: true } }

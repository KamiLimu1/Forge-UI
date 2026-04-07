import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['success', 'warning', 'danger', 'info', 'neutral'] },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Success: Story = { args: { variant: 'success', children: 'Active' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Pending' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Suspended' } }
export const Info: Story = { args: { variant: 'info', children: 'Info' } }
export const Neutral: Story = { args: { variant: 'neutral', children: 'Neutral' } }

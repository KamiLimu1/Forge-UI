import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { label: 'Email Address', placeholder: 'yourname@university.ac.ke', type: 'email' },
}

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'yourname@university.ac.ke',
    type: 'email',
    error: 'Please enter a valid email address.',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hint: 'Minimum 8 characters with uppercase, lowercase, and a digit.',
  },
}

export const Disabled: Story = {
  args: { label: 'Email Address', value: 'peter@university.ac.ke', disabled: true },
}

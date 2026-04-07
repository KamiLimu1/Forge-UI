import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from './Button'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Invite User',
    onClose: () => {},
    children: <p className="text-text-secondary font-sans text-body">Modal body content goes here.</p>,
    footer: (
      <>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Send Invite</Button>
      </>
    ),
  },
}

export const Narrow: Story = {
  args: { ...Default.args, title: 'Confirm Action', width: 'sm' },
}

export const Wide: Story = {
  args: { ...Default.args, title: 'Bulk Invite', width: 'lg' },
}

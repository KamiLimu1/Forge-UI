import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'

const meta: Meta<typeof AdminLayout> = {
  title: 'Layout/AdminLayout',
  component: AdminLayout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/admin/users']}>
        <Routes>
          <Route path="/admin" element={<Story />}>
            <Route
              path="users"
              element={
                <div className="p-6 font-mono text-body text-text-secondary">
                  Page content renders here via Outlet.
                </div>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AdminLayout>

export const Default: Story = {}

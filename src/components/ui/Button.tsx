import type { ButtonHTMLAttributes } from 'react'
import { Spinner } from './Spinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 font-mono font-bold tracking-widest uppercase transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40'

const variants = {
  primary: 'bg-teal-500 text-text-inverse hover:bg-teal-700 active:bg-teal-900',
  ghost:
    'bg-transparent text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-text-inverse active:bg-teal-700',
  danger: 'bg-auburn text-text-inverse hover:opacity-90 active:opacity-80',
}

const sizes = {
  sm: 'h-8 px-3 text-caption rounded-sm',
  md: 'h-10 px-5 text-body rounded-md',
  lg: 'h-14 px-6 text-subheading rounded-md',
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled ?? isLoading}
      {...rest}
    >
      {isLoading && <Spinner size="sm" />}
      {children}
    </button>
  )
}

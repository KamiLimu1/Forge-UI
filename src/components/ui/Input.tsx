import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export function Input({ label, error, hint, id, className = '', ...rest }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="font-mono text-caption font-semibold tracking-widest uppercase text-text-muted"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[
          'w-full h-14 px-4 rounded-md font-sans text-quote text-text-primary',
          'bg-surface border border-border',
          'placeholder:text-text-muted',
          'transition-colors duration-fast',
          'focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          error ? 'border-auburn focus:border-auburn focus:ring-auburn' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="font-sans text-body text-auburn">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="font-sans text-body text-text-muted">
          {hint}
        </p>
      )}
    </div>
  )
}

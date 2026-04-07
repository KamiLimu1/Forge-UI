interface TopBarProps {
  title: string
}

export function TopBar({ title }: TopBarProps) {
  return (
    <header className="h-14 flex items-center px-6 border-b border-border bg-surface flex-shrink-0">
      <h1 className="font-mono font-bold text-section text-text-primary">
        {title}
      </h1>
    </header>
  )
}

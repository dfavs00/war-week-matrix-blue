export interface RosterHeaderStat {
  label: string
  value: string | number
}

export interface RosterHeaderProps {
  teamLabel: string
  title: string
  description: string
  statusLabel: string
  statusValue: string
  statCards: RosterHeaderStat[]
}

/**
 * Displays the command center header and live roster metadata.
 */
const RosterHeader = ({
  teamLabel,
  title,
  description,
  statusLabel,
  statusValue,
  statCards,
}: RosterHeaderProps) => {
  return (
    <header className="relative space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--matrix-accent)]">{teamLabel}</p>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--matrix-text)]">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--matrix-muted)]">{description}</p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/70 px-5 py-4 text-xs uppercase tracking-[0.35em] text-[var(--matrix-accent)]">
          <span>{statusLabel}</span>
          <span className="text-lg font-semibold tracking-[0.2em] text-[var(--matrix-text)]">{statusValue}</span>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {statCards.map((card) => (
          <div key={card.label} className="matrix-stat">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">{card.label}</p>
            <p className="text-2xl font-semibold text-[var(--matrix-text)]">{card.value}</p>
          </div>
        ))}
      </div>
    </header>
  )
}

export default RosterHeader

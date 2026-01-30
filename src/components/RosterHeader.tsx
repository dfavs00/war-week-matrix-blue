import type { RosterStats } from '../utils/roster'

interface RosterHeaderProps {
  stats: RosterStats
}

/**
 * Displays the command center header and live roster metadata.
 */
const RosterHeader = ({ stats }: RosterHeaderProps) => {
  return (
    <header className="relative space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--matrix-accent)]">Blue Team Arsenal</p>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--matrix-text)]">Elite Cyber-Rebellion Roster</h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--matrix-muted)]">
            A tactical registry of Zion operatives. Each profile is synced from the core roster feed and matched to the
            latest surveillance captures.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/70 px-5 py-4 text-xs uppercase tracking-[0.35em] text-[var(--matrix-accent)]">
          <span>System Status</span>
          <span className="text-lg font-semibold tracking-[0.2em] text-[var(--matrix-text)]">ONLINE</span>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="matrix-stat">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Operatives</p>
          <p className="text-2xl font-semibold text-[var(--matrix-text)]">{stats.totalOperatives}</p>
        </div>
        <div className="matrix-stat">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">One Mission</p>
          <p className="text-2xl font-semibold text-[var(--matrix-text)]">Winning</p>
        </div>
        <div className="matrix-stat">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Red Team Success Chance</p>
          <p className="text-2xl font-semibold text-[var(--matrix-text)]">0%</p>
        </div>
      </div>
    </header>
  )
}

export default RosterHeader

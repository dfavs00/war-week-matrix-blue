interface TeamSwitcherProps {
  activeTeam: 'blue' | 'red'
  onSelectTeam: (team: 'blue' | 'red') => void
}

/**
 * Toggle to switch between roster pages.
 */
const TeamSwitcher = ({ activeTeam, onSelectTeam }: TeamSwitcherProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/70 px-4 py-3">
      <span className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Team Channel</span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onSelectTeam('blue')}
          className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] transition ${
            activeTeam === 'blue'
              ? 'bg-[var(--matrix-accent)] text-[var(--matrix-bg)]'
              : 'border border-[var(--matrix-border)] text-[var(--matrix-text)]/80 hover:text-[var(--matrix-text)]'
          }`}
        >
          Blue Team
        </button>
        <button
          type="button"
          onClick={() => onSelectTeam('red')}
          className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] transition ${
            activeTeam === 'red'
              ? 'bg-[var(--matrix-accent)] text-[var(--matrix-bg)]'
              : 'border border-[var(--matrix-border)] text-[var(--matrix-text)]/80 hover:text-[var(--matrix-text)]'
          }`}
        >
          Red Team
        </button>
      </div>
    </div>
  )
}

export default TeamSwitcher

import type { OperativeProfile } from '../utils/roster'
import { getOperativeImageUrl } from '../utils/roster'

interface OperativeCardProps {
  profile: OperativeProfile
}

/**
 * Renders a single operative profile card.
 */
const OperativeCard = ({ profile }: OperativeCardProps) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/70 p-4 shadow-[0_0_20px_rgba(58,149,255,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[var(--matrix-accent)]">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 matrix-highlight" />
      </div>
      <div className="relative flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[var(--matrix-accent)] shadow-[0_0_15px_rgba(110,200,255,0.45)]">
          <img
            src={getOperativeImageUrl(profile.imageFile)}
            alt={`${profile.name} portrait`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Codename</p>
          <h3 className="font-display text-xl text-[var(--matrix-text)]">{profile.codename}</h3>
          <p className="text-sm text-[var(--matrix-muted)]">{profile.name}</p>
        </div>
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-[var(--matrix-text)]/90">{profile.backstory}</p>
    </article>
  )
}

export default OperativeCard

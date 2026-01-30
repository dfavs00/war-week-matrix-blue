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
    <article className="matrix-flip group relative h-full rounded-2xl" tabIndex={0}>
      <div className="matrix-flip-inner relative h-full w-full rounded-2xl">
        <div className="matrix-flip-face relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/70 p-4 shadow-[0_0_20px_rgba(58,149,255,0.2)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--matrix-accent)] md:p-5">
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 matrix-highlight" />
          </div>
          <div className="relative mb-4 h-52 w-full overflow-hidden rounded-xl border border-[var(--matrix-border)]/60 md:hidden">
            <img
              src={getOperativeImageUrl(profile.imageFile)}
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(5,10,20,0.85)] via-transparent to-transparent" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[var(--matrix-accent)] shadow-[0_0_15px_rgba(110,200,255,0.45)] max-md:hidden">
              <img
                src={getOperativeImageUrl(profile.imageFile)}
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Codename</p>
              <h3 className="font-display text-xl text-[var(--matrix-text)]">{profile.codename}</h3>
              <p className="text-sm text-[var(--matrix-muted)]">{profile.name}</p>
            </div>
          </div>
          <div className="relative mt-4 rounded-xl border border-[var(--matrix-border)]/60 bg-[rgba(6,16,32,0.6)] p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--matrix-muted)]">Backstory</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--matrix-text)]/90">{profile.backstory}</p>
          </div>
        </div>
        <div className="matrix-flip-face matrix-flip-back absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/90 shadow-[0_0_30px_rgba(58,149,255,0.35)]">
          <div className="flex h-full flex-col md:flex-row">
            <div className="relative h-56 w-full md:h-full md:w-1/2">
              <img
                src={getOperativeImageUrl(profile.imageFile)}
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(5,10,20,0.85)] via-transparent to-transparent" />
            </div>
            <div className="flex w-full flex-col justify-center gap-3 p-5 md:w-1/2">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--matrix-muted)]">Name Decode</p>
                <h3 className="font-display text-xl text-[var(--matrix-text)]">{profile.codename}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--matrix-text)]/90 md:max-h-40 md:overflow-y-auto md:pr-2">
                {profile.nameDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default OperativeCard

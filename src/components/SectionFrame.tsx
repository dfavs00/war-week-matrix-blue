import type { ReactNode } from 'react'

interface SectionFrameProps {
  title: string
  subtitle?: string
  children: ReactNode
}

/**
 * Provides a framed panel with neon borders for sections.
 */
const SectionFrame = ({ title, subtitle, children }: SectionFrameProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[var(--matrix-border)] bg-[var(--matrix-panel)]/80 p-6 shadow-[0_0_25px_var(--matrix-glow-panel)] backdrop-blur">
      <div className="absolute inset-0 border border-[var(--matrix-accent)]/40" />
      <div className="relative space-y-1">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-[var(--matrix-accent)]">{title}</p>
        {subtitle ? <h2 className="text-lg font-semibold text-[var(--matrix-text)]">{subtitle}</h2> : null}
      </div>
      <div className="relative mt-5">{children}</div>
    </section>
  )
}

export default SectionFrame

import { useMemo } from 'react'
import MatrixBackdrop from '../components/MatrixBackdrop'
import RosterGrid from '../components/RosterGrid'
import RosterHeader from '../components/RosterHeader'
import SectionFrame from '../components/SectionFrame'
import { useRosterData } from '../hooks/useRosterData'
import { getRosterStats } from '../utils/roster'

interface RosterPageProps {}

/**
 * Main roster page for the Blue Team Arsenal.
 */
const RosterPage = ({}: RosterPageProps) => {
  const { roster } = useRosterData()
  const stats = useMemo(() => getRosterStats(roster), [roster])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--matrix-bg)] text-[var(--matrix-text)]">
      <MatrixBackdrop />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-12">
        <RosterHeader stats={stats} />
        <SectionFrame title="Operative Grid" subtitle="Zion Rebel Cadre">
          <RosterGrid profiles={roster} />
        </SectionFrame>
        <SectionFrame title="Arsenal Expansion" subtitle="Future Protocol Slots">
          <div className="grid gap-4 md:grid-cols-3">
            {['Strategy Generator', 'Glitch Detector', 'Signal Forensics'].map((item) => (
              <div key={item} className="rounded-xl border border-dashed border-[var(--matrix-border)] p-4 text-sm text-[var(--matrix-muted)]">
                <p className="font-display text-base text-[var(--matrix-text)]">{item}</p>
                <p className="mt-2">Reserved channel for advanced AI tactics and mission tooling.</p>
              </div>
            ))}
          </div>
        </SectionFrame>
      </div>
    </main>
  )
}

export default RosterPage

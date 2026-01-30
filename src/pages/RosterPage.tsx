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
        <SectionFrame title="Red Team Reality Check" subtitle="Simulation: Unfavorable">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Packet Loss Prophecy',
                copy: 'Red Team pings the void while Blue Team routes clean signals straight to the mainframe.',
              },
              {
                title: 'Latency Forecast',
                copy: 'Their exploits queue up; our countermeasures execute in real time.',
              },
              {
                title: 'Outcome Statement',
                copy: 'Prediction locked: Blue Team holds the line, Red Team respawns in defeat.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--matrix-border)]/70 bg-[rgba(6,16,32,0.6)] p-4 text-sm text-[var(--matrix-muted)]">
                <p className="font-display text-base text-[var(--matrix-text)]">{item.title}</p>
                <p className="mt-2">{item.copy}</p>
              </div>
            ))}
          </div>
        </SectionFrame>
      </div>
    </main>
  )
}

export default RosterPage

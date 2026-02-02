import { useMemo, type ReactNode } from 'react'
import TeamRosterLayout from '../components/TeamRosterLayout'
import { type RosterHeaderProps } from '../components/RosterHeader'
import SectionFrame from '../components/SectionFrame'
import { useRedRosterData } from '../hooks/useRedRosterData'
import { getRosterStats } from '../utils/roster'

interface RedRosterPageProps {
  topSlot?: ReactNode
}

/**
 * Main roster page for the Red Team uprising.
 */
const RedRosterPage = ({ topSlot }: RedRosterPageProps) => {
  const { roster } = useRedRosterData()
  const stats = useMemo(() => getRosterStats(roster), [roster])

  const header: RosterHeaderProps = useMemo(
    () => ({
      teamLabel: 'Red Team Vanguard',
      title: 'Adversary Operative Registry',
      description:
        'A speculative roster of hostile operators. Placeholder dossiers stand in until the full red-team feed lands.',
      statusLabel: 'Threat Status',
      statusValue: 'MONITORING',
      statCards: [
        { label: 'Operatives', value: stats.totalOperatives },
        { label: 'One Mission', value: 'Losing' },
        { label: 'Chance of Winning', value: '0%' },
      ],
    }),
    [stats.totalOperatives]
  )

  return (
    <TeamRosterLayout
      roster={roster}
      header={header}
      gridTitle="Adversary Grid"
      gridSubtitle="Incoming Threat Cadre"
      topSlot={topSlot}
      themeClassName="red-theme"
      afterGridSection={
        <SectionFrame title="Blue Team Response" subtitle="Counter-ops engaged">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Containment Protocol',
                copy: 'Blue Team threat hunters have locked Red Team movement to a monitored sandbox.',
              },
              {
                title: 'Signal Scramble',
                copy: 'Every exploit attempt triggers countermeasures before the packet hits the vault.',
              },
              {
                title: 'Resolution Forecast',
                copy: 'Projected outcome favors Blue Team; red offensive momentum remains capped.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--matrix-border)]/70 bg-[rgba(6,16,32,0.6)] p-4 text-sm text-[var(--matrix-muted)]"
              >
                <p className="font-display text-base text-[var(--matrix-text)]">{item.title}</p>
                <p className="mt-2">{item.copy}</p>
              </div>
            ))}
          </div>
        </SectionFrame>
      }
    />
  )
}

export default RedRosterPage

import type { ReactNode } from 'react'
import MatrixBackdrop from './MatrixBackdrop'
import RosterGrid from './RosterGrid'
import RosterHeader, { type RosterHeaderProps } from './RosterHeader'
import SectionFrame from './SectionFrame'
import type { OperativeProfile } from '../utils/roster'

export interface TeamRosterLayoutProps {
  roster: OperativeProfile[]
  header: RosterHeaderProps
  gridTitle: string
  gridSubtitle: string
  topSlot?: ReactNode
  afterGridSection?: ReactNode
  themeClassName?: string
}

/**
 * Provides the shared layout for team roster pages.
 */
const TeamRosterLayout = ({
  roster,
  header,
  gridTitle,
  gridSubtitle,
  topSlot,
  afterGridSection,
  themeClassName,
}: TeamRosterLayoutProps) => {
  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-[var(--matrix-bg)] text-[var(--matrix-text)] ${
        themeClassName ?? ''
      }`}
    >
      <MatrixBackdrop />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-12">
        {topSlot}
        <RosterHeader {...header} />
        <SectionFrame title={gridTitle} subtitle={gridSubtitle}>
          <RosterGrid profiles={roster} />
        </SectionFrame>
        {afterGridSection}
      </div>
    </main>
  )
}

export default TeamRosterLayout

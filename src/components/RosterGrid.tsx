import type { OperativeProfile } from '../utils/roster'
import OperativeCard from './OperativeCard'

interface RosterGridProps {
  profiles: OperativeProfile[]
}

/**
 * Lays out the operative grid.
 */
const RosterGrid = ({ profiles }: RosterGridProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <OperativeCard key={profile.id} profile={profile} />
      ))}
    </div>
  )
}

export default RosterGrid

import redRosterData from '../data/roster-red.json'
import type { OperativeProfile } from '../utils/roster'

interface UseRedRosterDataResult {
  roster: OperativeProfile[]
}

/**
 * Provides red team roster profiles from the JSON configuration.
 */
export const useRedRosterData = (): UseRedRosterDataResult => {
  return {
    roster: redRosterData as OperativeProfile[],
  }
}

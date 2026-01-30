import rosterData from '../data/roster.json'
import type { OperativeProfile } from '../utils/roster'

interface UseRosterDataResult {
  roster: OperativeProfile[]
}

/**
 * Provides roster profiles from the JSON configuration.
 */
export const useRosterData = (): UseRosterDataResult => {
  return {
    roster: rosterData as OperativeProfile[],
  }
}

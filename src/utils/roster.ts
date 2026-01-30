export interface OperativeProfile {
  id: string
  name: string
  codename: string
  nameDescription: string
  backstory: string
  imageFile: string
}

export interface RosterStats {
  totalOperatives: number
  activeCells: number
  uniqueCodenames: number
}

/**
 * Calculates roster summary metrics for the command header.
 */
export const getRosterStats = (profiles: OperativeProfile[]): RosterStats => {
  const uniqueCodenames = new Set(profiles.map((profile) => profile.codename)).size

  return {
    totalOperatives: profiles.length,
    activeCells: Math.max(1, Math.ceil(profiles.length / 6)),
    uniqueCodenames,
  }
}

/**
 * Builds the public URL to a roster image in the operatives directory.
 */
export const getOperativeImageUrl = (imageFile: string): string => {
  const baseUrl = import.meta.env.BASE_URL
  return `${baseUrl}operatives/${imageFile}`
}

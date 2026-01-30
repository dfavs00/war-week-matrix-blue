import { useState } from 'react'
import TeamSwitcher from './components/TeamSwitcher'
import RedRosterPage from './pages/RedRosterPage'
import RosterPage from './pages/RosterPage'

/**
 * Root application shell.
 */
const App = () => {
  const [activeTeam, setActiveTeam] = useState<'blue' | 'red'>('blue')

  const topSlot = <TeamSwitcher activeTeam={activeTeam} onSelectTeam={setActiveTeam} />

  if (activeTeam === 'red') {
    return <RedRosterPage topSlot={topSlot} />
  }

  return <RosterPage topSlot={topSlot} />
}

export default App

import { Route, Routes } from 'react-router-dom'
import { PlayerNames } from './pages/PlayerNames'
import { Game } from './pages/Game'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<PlayerNames />} />
      <Route path='/Game' element={<Game />} />
    </Routes>
  )

}
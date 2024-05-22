
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GameContextProvider } from './contexts/GameContext'


function App() {

  return (
    <BrowserRouter>
      <GameContextProvider>
        <Router />
      </GameContextProvider>

    </BrowserRouter>
  )
}

export default App

import { ReactNode, createContext, useState } from "react";

interface GameContextType {
  player1Name: string
  player2Name: string
  currentPlayer: number
  gameScore: number[]
  currentPosition: number
  changePlayer1Name: (newName: string) => void
  changePlayer2Name: (newName: string) => void
  switchCurrentPlayer: () => void
  alterGameScore: (newGameScore: number[]) => void
  alterGamePosition: (newPOsition: number) => void
}

interface GameContextProviderProps {
  children: ReactNode
}

export const GameContext = createContext({} as GameContextType)

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [player1Name, setPlayer1Name] = useState('Jogador 1')
  const [player2Name, setPlayer2Name] = useState('Jogador 2')
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [gameScore, setGameScore] = useState<number[]>(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  )
  const [currentPosition, setCurrentPosition] = useState(12)

  function changePlayer1Name(newName: string) {
    setPlayer1Name(newName)
  }

  function changePlayer2Name(newName: string) {
    setPlayer2Name(newName)
  }

  function switchCurrentPlayer() {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0)
  }

  function alterGameScore(newGameScore: number[]) {
    setGameScore(newGameScore)
  }

  function alterGamePosition(newPosition: number) {
    setCurrentPosition(newPosition)
  }

  return (
    <GameContext.Provider
      value={{
        player1Name,
        player2Name,
        changePlayer1Name,
        changePlayer2Name,
        currentPlayer,
        switchCurrentPlayer,
        gameScore,
        alterGameScore,
        currentPosition,
        alterGamePosition
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
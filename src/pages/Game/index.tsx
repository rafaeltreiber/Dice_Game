import { MeasureBox } from "@/components/MeasureBox";
import { Card } from "@/components/ui/card";
import { GameContext } from "@/contexts/GameContext";
import { useContext, useState } from "react";


interface IScoreBox {
  index: number,
  color: string
}

export function Game() {
  const { player1Name, player2Name, currentPlayer, switchCurrentPlayer } = useContext(GameContext)

  const [gameScore, setGameScore] = useState<IScoreBox[]>(

    [
      {
        index: 0,
        color: 'bg-gray-100'
      },
      {
        index: 1,
        color: 'bg-gray-100'
      },
      {
        index: 2,
        color: 'bg-gray-100'
      },
      {
        index: 3,
        color: 'bg-gray-100'
      },
      {
        index: 4,
        color: 'bg-gray-100'
      },
      {
        index: 5,
        color: 'bg-gray-100'
      },
      {
        index: 6,
        color: 'bg-gray-100'
      },
      {
        index: 7,
        color: 'bg-gray-100'
      },
      {
        index: 8,
        color: 'bg-gray-100'
      },
      {
        index: 9,
        color: 'bg-gray-100'
      },
      {
        index: 10,
        color: 'bg-gray-100'
      },
      {
        index: 11,
        color: 'bg-gray-100'
      },
      {
        index: 12,
        color: 'bg-gray-100'
      },
      {
        index: 13,
        color: 'bg-gray-400'
      },
      {
        index: 14,
        color: 'bg-gray-100'
      },
      {
        index: 15,
        color: 'bg-gray-100'
      },
      {
        index: 16,
        color: 'bg-gray-100'
      },
      {
        index: 17,
        color: 'bg-gray-100'
      },
      {
        index: 18,
        color: 'bg-gray-100'
      },
      {
        index: 19,
        color: 'bg-gray-100'
      },
      {
        index: 20,
        color: 'bg-gray-100'
      },
      {
        index: 21,
        color: 'bg-gray-100'
      },
      {
        index: 22,
        color: 'bg-gray-100'
      },
      {
        index: 23,
        color: 'bg-gray-100'
      },
      {
        index: 24,
        color: 'bg-gray-100'
      },
      {
        index: 23,
        color: 'bg-gray-100'
      },
      {
        index: 24,
        color: 'bg-gray-100'
      },
    ]

  )

  const [timeoutValue, setTimeoutValue] = useState(1000)
  const [diceValue, setDiceValue] = useState(0)

  function rollDice() {
    const timer = setTimeout(() => {
      const newDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      setDiceValue(newDiceValue)
      setTimeoutValue(timeoutValue - 200)
      if (timeoutValue === 100) clearTimeout(timer)
    }, timeoutValue);
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="flex flex-col w-[90%] h-[60%] gap-4">
        <span>Jogador Atual: {currentPlayer === 0 ? player1Name : player2Name}</span>
        <button onClick={rollDice}>Rolar dado</button>
        <div className="flex w-full justify-center">
          <div className="max-w-20 border-2 p-10">
            {diceValue}
          </div>

        </div>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex w-[50%] justify-between">
            <div>{player1Name}</div>
            <div></div>
            <div>{player2Name}</div>
          </div>

          <div className="flex">
            {
              gameScore.map((value) => (
                <MeasureBox color={value.color} />
              ))
            }
          </div>
        </div>
      </Card>
    </div>
  )
}
import { MeasureBox } from "@/components/MeasureBox";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GameContext } from "@/contexts/GameContext";
import { useContext, useState } from "react";

export function Game() {
  const { player1Name, player2Name, currentPlayer, switchCurrentPlayer, gameScore, currentPosition, alterGamePosition, alterGameScore } = useContext(GameContext)
  const [winnerplayer, setwinnerPlayer] = useState('None')
  const [isEndGame, setIsEndGame] = useState(false)
  const [diceValue, setDiceValue] = useState(0)

  function rollDice() {
    const newDiceValue = Math.floor(Math.random() * 6 + 1);
    setDiceValue(newDiceValue)
    moveRope(newDiceValue)
  }

  function moveRope(amount: number) {
    const tempScore = gameScore;

    if (currentPlayer === 0) {
      if (currentPosition - amount < 0) {
        setwinnerPlayer('Player1')
        setIsEndGame(true)
      }

      tempScore[currentPosition] = 0
      tempScore[currentPosition - amount] = 1
      alterGamePosition(currentPosition - amount)
    } else {
      if (currentPosition + amount >= gameScore.length) {
        setwinnerPlayer('Player2')
        setIsEndGame(true)
      }

      tempScore[currentPosition] = 0
      tempScore[currentPosition + amount] = 1
      alterGamePosition(currentPosition + amount)
    }

    alterGameScore(tempScore)
    switchCurrentPlayer()

  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="flex flex-col w-[90%] h-[60%] gap-4">
        <div className="flex items-start p-4 text-lg">
          <span>Jogador Atual: {currentPlayer === 0 ? player1Name : player2Name}</span>
        </div>
        <div className="flex items-center justify-center w-full">
          <button onClick={rollDice} className="p-4 border-2 border-grey-200 rounded-lg max-w-32">Rolar dado</button>
        </div>
        <div className="flex w-full justify-center mt-10">
          <div className="max-w-20 border-2 rounded-sm p-10">
            {diceValue}
          </div>

        </div>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex w-[50%] justify-between">
            <div className="py-4">{player1Name}</div>
            <div></div>
            <div className="py-4">{player2Name}</div>
          </div>

          <div className="flex">
            {
              gameScore.map((value, index) => (
                <MeasureBox key={index} color={value === 0 ? 'bg-gray-100' : 'bg-gray-400'} />
              ))
            }
          </div>
        </div>
      </Card>

      <Dialog open={isEndGame}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex w-wull items-center justify-center">
            <span>{winnerplayer === 'Player1' ? player1Name : player2Name} Venceu </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
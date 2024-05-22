import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GameContext } from "@/contexts/GameContext";

import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import { z } from "zod"

const formSchema = z.object({
  player1: z.string().min(2).max(50),
  player2: z.string().min(2).max(50),
})

export function PlayerNames() {
  const { player1Name, player2Name, changePlayer1Name, changePlayer2Name } = useContext(GameContext)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      player1: player1Name,
      player2: player2Name
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    changePlayer1Name(values.player1)
    changePlayer2Name(values.player2)
    navigate('/Game')
  }

  const navigate = useNavigate();


  return (

    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="w-[40%] h-[40%] flex flex-col py-4 px-10 gap-3">
        <CardHeader>Selecione os jogadores</CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="player1"
              render={({ field }) => (
                <FormItem>

                  <div className="flex w-full">
                    <div className="flex w-[15%] gap-3">
                      <h1 >Jogador 1: </h1>
                    </div>
                    <div className="w-[60%]">
                      <Input {...field} />
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="player2"
              render={({ field }) => (
                <FormItem>

                  <div className="flex w-full">
                    <div className="flex w-[15%] gap-3">
                      <h1 >Jogador 2: </h1>
                    </div>
                    <div className="w-[60%]">
                      <Input {...field} />
                    </div>
                  </div>
                </FormItem>
              )}
            />


            <Button type="submit">Submit</Button>
          </form>
        </Form >
      </Card>
    </div>
  )
}


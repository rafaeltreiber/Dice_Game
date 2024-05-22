interface IMeasureBox {
  color: string
}

export function MeasureBox({ color }: IMeasureBox) {
  const classes = `w-10 h-10 border-2 + ${color}`
  return (
    <div className={classes}></div>
  )
}
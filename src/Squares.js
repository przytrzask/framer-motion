import React from "react"
import { motion } from "framer-motion"
import { shuffle } from "lodash/fp"

const COLORS = ["var(--red)", "var(--blue )", "var(--black)", "var(--green)"]

export function Squares() {
  const [colors, setColors] = React.useState(COLORS)
  const savedCallback = React.useRef(() => setColors(shuffle(colors)))

  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    let id = setInterval(tick, 1500)
    return () => clearInterval(id)
  }, [])
  return (
    <div>
      {colors.map((color) => (
        <motion.div
          layout
          key={color}
          style={{
            width: "100px",
            height: "100px",
            background: color,
          }}
        />
      ))}
    </div>
  )
}

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

const COLORS = [
  "var(--red)",
  "var(--blue )",
  "var(--black)",
  "var(--green)",
  "var(--purp)",
]

const variants = {
  enter: (direction) =>
    console.log(direction) || { opacity: 0, x: direction > 0 ? 1000 : -1000 },
  center: { opacity: 1, x: 0 },
  exit: (direction) =>
    console.log(direction) || { opacity: 0, x: direction > 0 ? -1000 : 1000 },
}

export function Slideshow() {
  const [[page, direction], setActiveIndex] = React.useState([0, 0])

  const pagninate = (direction) => {
    setActiveIndex([page + direction, direction])
  }

  const index = wrap(0, COLORS.length, page)

  return (
    <div
      style={{
        position: "relative",

        height: 300,
      }}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          style={{
            marginBottom: "3rem",
            height: 300,
            background: COLORS[index],
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            if (offset.x > 400) {
              pagninate(-1)
            } else if (offset.x < 300) {
              pagninate(1)
            }
          }}
        />
      </AnimatePresence>
    </div>
  )
}

import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Squares } from "../Squares"

const AbooutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h2>Slideshow</h2>
      <Squares />
    </motion.div>
  )
}

export default AbooutPage

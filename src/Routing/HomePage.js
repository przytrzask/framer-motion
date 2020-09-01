import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Slideshow } from "../Slideshow"

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

const hVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay: 1 } },
  exit: { opacity: 0, y: 100 },
}

const HomePage = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2 variants={hVariants}>Slideshow</motion.h2>
      <Slideshow />
    </motion.div>
  )
}

export default HomePage

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Modal({ show = true, onClose, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.dialog
          open={show}
          onClose={onClose}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
        >
          <button onClick={onClose}>X</button>
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  )
}

import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Card, CardGrid, Container, Header } from "./Elements"
import "./App.css"
import Menu from "./Menu"
import { Modal } from "./Modal"
import { Accordion } from "./Accordion"

import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

function App() {
  const [value, setValue] = React.useState(0)
  const [show, toggle] = React.useState(false)
  return (
    <motion.div animate={{ opacity: [0.5, 1, 0, 1] }}>
      <Modal show={show} onClose={() => toggle(false)}>
        <Card style={{ background: "var(--green)" }}>
          <h3>Some card</h3>
          <img alt="card" src={green} />
        </Card>
      </Modal>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Accordion />
      <Container>
        <AnimatePresence exit="">
          {show && (
            <motion.h2
              animate={{ opacity: 1, x: Number(value) }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <input
          type="range"
          min="-100"
          max="100"
          onChange={(evt) => setValue(evt.currentTarget.value)}
          value={value}
        />
        <button onClick={() => toggle(true)}>Set Opacity</button>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img alt="card" src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img alt="card" src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img alt="card" src={black} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  )
}

export default App

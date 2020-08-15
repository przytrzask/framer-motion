import React from "react"
import { motion } from "framer-motion"
import { Card, CardGrid, Container, Header } from "./Elements"
import "./App.css"
import Menu from "./Menu"
import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

function App() {
  const [value, setValue] = React.useState(0)
  const [opacity, setOpacity] = React.useState(1)
  console.log(value)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2 animate={{ x: Number(value), opacity }}>
          Super Cool
        </motion.h2>
        <input
          type="range"
          min="-100"
          max="100"
          onChange={(evt) => setValue(evt.currentTarget.value)}
          value={value}
        />
        <button
          onClick={() => setOpacity((prevOpacity) => (prevOpacity ? 0 : 1))}
        >
          Set Opacity
        </button>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  )
}

export default App

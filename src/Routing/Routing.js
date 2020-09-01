import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Card, Container, Header } from "../Elements"
import "../App.css"
import Menu from "../Menu"
import { Modal } from "../Modal"
import { Nav } from "../Nav"

import green from "../green.png"
import { Link, Switch, Route, useLocation } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"

function App() {
  const location = useLocation()
  const [show, toggle] = React.useState(false)

  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <Modal show={show} onClose={() => toggle(false)}>
        <Card style={{ background: "var(--green)" }}>
          <h3>Some card</h3>
          <img alt="card" src={green} />
        </Card>
      </Modal>
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

        <h1>Header</h1>
        <Link to="/routing">Home</Link>
        <Link to="/routing/about">About</Link>
      </Header>
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/routing" exact>
              <HomePage />
            </Route>
            <Route path="/routing/about">
              <AboutPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  )
}

export default App

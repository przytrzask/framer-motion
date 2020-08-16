import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const variants = {
  open: { x: 0 },
  close: {
    x: "-100%",
    transition: {
      delay: 0.2,
    },
  },
}

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  close: { y: -20, opacity: 0 },
  delay: 1,
}

const links = ["one", "two", "three", "four"]

export function Nav({ isNavOpen, setIsNavOpen }) {
  return (
    <MenuNav
      variants={variants}
      initial="close"
      animate={isNavOpen ? "open" : "close"}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <ul>
        {links.map((link) => (
          <motion.li variants={linkVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </ul>
    </MenuNav>
  )
}

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 1rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: var(--white);
      border-bottom: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid var(--blue);
      }
    }
  }
`

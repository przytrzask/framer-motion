import styled from "styled-components"
import { motion } from "framer-motion"

export const Header = styled.header`
  background: var(--black);
  color: white;
  padding: 20px;
  display: flex;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    font-size: 1rem;
  }
`

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 60px;
`

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`

export const Card = styled(motion.div)`
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
    pointer-events: none;
  }
`

export const ModalContent = styled.dialog`
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 1rem;
  bottom: 1rem;
  z-index: 2;
  backdrop-filter: "blur(3px)";
`

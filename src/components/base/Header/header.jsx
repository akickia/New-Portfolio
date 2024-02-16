import React from 'react'
import "./header.scss"

export const Header = () => {
  return (
    <header>
      <img src='./akickia.se.png'></img>
      <nav>
        <a href='#'>Projekt</a>
        <a href='#'>Utbildning & erfarenhet</a>
        <a href='#'>Om mig</a>
        <a href='#'><button>Kontakt</button></a>
      </nav>
    </header>
  )
}

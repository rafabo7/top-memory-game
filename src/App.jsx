import { Header } from "./Components/Header"
import { Game } from "./Components/Game"
import { Footer } from "./Components/Footer"
import { useState, useEffect } from "react"


function App () {
  const [cards, setCards] = useState(null)
  const [clicked, setClicked] = useState(null)

  const getPokemons = async () => {
    const newPokemons = []

    while (newPokemons.length < 5) {
      
      const randomId = Math.floor(Math.random() * 387)
      if (randomId === 0) continue
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
    const json = await response.json()
      const newCard = {
        name: json.name,
        id: json.id,
        sprite: json.sprites.front_default
      }
  

      if (newPokemons.some( e => e.id === newCard.id)) continue
      newPokemons.push(newCard)


    }

    setCards(newPokemons)
  }

  



return (
  <>
  <button onClick={() => getPokemons()}>click</button>
  {cards && <img src={cards.sprite} style={{width: "200px"}} alt="WTF" />}
  <Header />
  <Game />
  <Footer />
  </>
)
}

export default App
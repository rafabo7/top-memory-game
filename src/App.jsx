import { Header } from "./Components/Header"
import { Game } from "./Components/Game"
import { Footer } from "./Components/Footer"
import { useState, useEffect } from "react"


function App () {
  const [cards, setCards] = useState({})
  const [clicked, setClicked] = useState(null)

  const getPokemons = async () => {
    const randomId = Math.floor(Math.random() * 200)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
    const json = await response.json()
    const {
      name,
      id,
      sprites: {
        front_default: sprite
      }
    } = json

    const newCard = {name, id, sprite}

    setCards(newCard)
  }
console.log(cards);

  



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
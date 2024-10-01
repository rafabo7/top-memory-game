import { Header } from "./Components/Header"
import { Game } from "./Components/Game"
import { Footer } from "./Components/Footer"
import { useState, useEffect } from "react"


function App () {
  const [cards, setCards] = useState(null)
  const [clicked, setClicked] = useState([])

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


  const onClickImage = (e) => {
    const target = e.target
    const clickedDiv = target.closest('div')
    const clickedId = clickedDiv.dataset.id
    const newClicked = [...clicked, clickedId]
    console.log(newClicked);
    setClicked(newClicked)
  }

  



return (
  <>
  <section className="cards-grid">
    {cards && cards.map( e => (<div className="card" key={e.id}>
      <img  src={e.sprite} alt={e.name} />
      <p>{e.name}</p>
      </div>)
    )}
  </section>
  <button onClick={() => getPokemons()}>click</button>
  <Header />
  <Game />
  <Footer />
  </>
)
}

export default App
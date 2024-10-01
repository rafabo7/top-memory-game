import '../Styles/Game.css'

export function Game ( { cards, clickImage }) {

    return (
        <section className="cards-grid">
    {cards && cards.map( e => (<div onClick={ (e) => clickImage(e)} className="card" data-id={e.id} key={e.id}>
      <img src={e.sprite} alt={e.name} />
      <p>{e.name}</p>
      </div>)
    )}
  </section>
    )
    
}
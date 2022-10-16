import "./card.style.css"

const Card = (monsters) => {
  const {name, id, email, src} = monsters
  return(
  <div className="card-container" key={id}>
    <img 
      src={src}
      alt={`monster-${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
  )
}

export default Card
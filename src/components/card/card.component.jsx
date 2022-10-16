import "./card.style.css"

const Card = (props) => {
  const {name, id, email, src} = props
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
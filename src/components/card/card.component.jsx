import { Component } from 'react'
import './card.style.css'

class Card extends Component {
    render() {
        const {name, id, email, src} = this.props
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
}

export default Card
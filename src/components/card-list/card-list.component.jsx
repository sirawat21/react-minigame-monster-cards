import { Component } from "react";
import Card from '../card/card.component'
import './card-list.style.css'
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props.monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          let { name, id, email } = monster;
          return (
            <Card 
            id={id}
            name={name}
            email={email}
            src={`https://robohash.org/${id}?set=set2`}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;

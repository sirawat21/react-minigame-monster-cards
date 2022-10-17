import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map(({ name, id, email }) => (
          <Card
            key={id}
            id={id}
            name={name}
            email={email}
            src={`https://robohash.org/${id}?set=set1&size=180x180`}
          />
        )
      )}
    </div>
  );
};

export default CardList;

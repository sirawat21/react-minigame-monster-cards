import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";
class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchKey: "",
    };
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ monsters: res });
      });
  }

  componentDidUpdate() {}

  searchMonstersOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    this.setState({ searchKey: search });
  };

  removeMonsterOnClick(name, monsters) {
    const newLists = monsters.filter((monster) => monster.name !== name);
    this.setState({ monsters: newLists });
  }

  addMonstersOnClick(name, monsters) {
    const newMonster = {
      id: monsters[monsters.length - 1]["id"] + 1,
      name: name,
    };
    this.setState({ monsters: [...monsters, newMonster] });
  }

  render() {
    const { monsters, searchKey } = this.state;
    const { searchMonstersOnChange } = this;

    // check for searching key
    let monsterShowCase = monsters;
    if (searchKey != "") {
      monsterShowCase = monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchKey)
      );
    }

    return (
      <div>
        {/* Add new monsters */}
        <div>
          <input type="text" placeholder="Name" id="monsterName" />
          <button
            onClick={() => {
              const name = document.getElementById("monsterName").value;
              this.addMonstersOnClick(name, monsters);
            }}
          >
            Add
          </button>
        </div>
        {/* Search a monster */}
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={searchMonstersOnChange}
          placeholder="Seatch monster"
        />
        {/* Show monster cards */}
        <CardList monsters={monsterShowCase} />
      </div>
    );
  }
}

export default App;

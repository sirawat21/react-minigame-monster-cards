import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css"

const App = () => {
  // use state monsters variable
  const [monsters, setMonsters] = useState([]);
  // use state search field variable
  const [searchField, setSearchField] = useState("");
  // use filtered monster variable
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // use effect initialize monster data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) => {
        setMonsters(monsters);
      });
  }, []);

  // func search monster cards; set state of search field 
  const searchMonsters = (event) => {
    setSearchField(event.target.value) 
  }

  // use effect tricker execute filter if searchField value has change
  useEffect(() => {
    const filteredNameOfMonsters = monsters.filter(monster => (
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    ))
    setFilteredMonsters(filteredNameOfMonsters)
  }, [searchField, monsters])

  console.log(monsters)
  return(
    <div className="App">
      <h1 className="app-title">Monster Dex</h1>
      <SearchBox className="monsters-search-box"
      onChangeHandler={searchMonsters}
      placeholder="Monster Loop Up"/>
      <CardList monsters={filteredMonsters}/>
    </div>);
};

export default App;

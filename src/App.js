import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  // use state variable monsters
  const [monsters, setMonsters] = useState([]);

  // use state variable search field
  const [searchField, setSearchField] = useState(""); // [vlue, setVaule]

  // use state variable filtered monsters
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  // use effect set initial variable of monsters
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setMonsters(res);
      });
  }, []); // [Func; (it will run if dependency arr had change), arrOfDependency]

  // use effect filter monsters
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setfilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const searchMonstersOnChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className="App">
      <h1 className="app-title">APP rendered</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={searchMonstersOnChange}
        placeholder="Seatch monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

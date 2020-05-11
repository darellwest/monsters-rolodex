import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends Component {
  constructor(){ 
    // super calls the constructor methods on the component class
    super();
    this.state = {
      monsters : [],
      searchField: ""
   };
    //this.handleChange = this.handleChange.bind(this);
  }
 
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monsters : user}))
  }
  //arrow functions allows us to set this it is defined so we dont need to bind this anymore
  handleChange = e =>  this.setState({searchField : e.target.value});
  
  render(){
    const{monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = 'search monster'
          handleChange = {this.handleChange.bind(this)}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;

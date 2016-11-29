import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery';
import GroceryList from './GroceryList';

class App extends Component {

  onClearGroceries() {
    console.log('groceries cleared')
  }

  render() {
    return (
      <div>
      <Grocery name={'bananas'} starred={false} />
      <GroceryList onClearGroceries={this.onClearGroceries}/>
      </div>
    );
  }
}

export default App;

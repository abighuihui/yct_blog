import React, { Component } from 'react';

import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("app constructor");
  }
  componentDidMount() {
    //AJAX Call
    console.log("app mounted");
  }

  handleDelete = (counterId) => {
    //console.log("bibibi", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("app rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters counters={this.state.counters} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );

  }
}

export default App;


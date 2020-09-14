import React, {Component} from "react";
import "./styles.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  
    state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 5 },
        { id: 4, value: 0 }
      ]
    };
  
    handleIncrement = (counter) => {
      const counters = [...this.state.counters];
  
      const index = counters.indexOf(counter);
  
      counters[index] = { ...counter };
  
      counters[index].value++;
  
      this.setState({ counters: counters });
    };
    handleReset = () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({ counters: counters });
    };
    handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters: counters });
    };
    render(){
    return (
      <div className="App">
        <h1>React Cart App</h1>
        <Navbar totalCounters= {this.state.counters.filter( c=> c.value > 0  ).length} />
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete} />
      </div>
    );
  }
  
}
export default App

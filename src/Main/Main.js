import React, {
  Component
} from 'react';
import './Main.css';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count:0
      }
    }

incrementCounter = () => {

this.setState({
    count: this.state.count  == 25 ? 0 : this.state.count + 1
  })
}

render(){
    var numberClass;
    if (this.state.count % 2 == 0) {
      numberClass = "even"
    } else {
      numberClass = "odd"
    }
    const classes = "circle " + numberClass;
    return (
      <div className = "main" >
      <div onClick = {
        this.incrementCounter
      } className = {classes}>
    <p> {this.state.count} </p>
        </div>
      </div>
    );
  }
}
export default Main;

import React, {
  Component
} from 'react';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [{
          name: 'Perry',
          age: 30
        },
        {
          name: 'Ana',
          age: 25
        },
        {
          name: 'Valja',
          age: 20
        },
      ]
    }
  }

  changeState = () => {
    console.log('dadaaaaaaa');

    this.setState({
        persons: [
        {name: 'karam',age: 21},
          {name: 'Rost',age: 23},
          {name: 'Alak',age: 22},
        ]
      }
    )
  }

  render() {
    return ( < div className = "header" >
      <
      h1 > My name is {
        this.state.persons[1].name
      }.And i am {
        this.state.persons[1].age
      }
      years old. < /h1> <
      button onClick = {
        this.changeState
      } > Look at me! < /button> <
      /div>
    );
  }
}

export default Header;

import React, {Component} from 'react';

class Coursesales extends Component {
  render(){
    console.log(this.props.items)
    return(      
      <div>
        <p>From course sales</p>
      </div>
    );
  }
}

export default Coursesales;

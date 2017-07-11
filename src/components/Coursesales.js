import React, {Component} from 'react';
import Course from './Course';

class Coursesales extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };

    this.sumPrice = this.sumPrice.bind(this);
  }

  sumPrice = (price) => {
    this.setState({total: this.state.total + price})
  }

  render(){
    console.log(this.props.items);
    let courses = this.props.items.map((course, i) => {
      return (
        <Course key={i} name={course.name}
          price={course.price} sumPrice={this.sumPrice}
          active={course.active}
        />
      );
    });

    return(
      <div>
        <h2>You can buy courses: </h2>
        <div id="courses">
          {courses}
          <p id="total">Total: <strong>{this.state.total}</strong></p>
        </div>
      </div>
    );
  }
}

export default Coursesales;

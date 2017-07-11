import React, { Component } from 'react';

class Course extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    this.clickedTitle = this.clickedTitle.bind(this);
  }

  clickedTitle() {
    let active = !this.state.active;
    this.setState({active: active});
    this.props.sumPrice(active ? this.props.price: -this.props.price);
  }
  render(){
    return(
      <div>
        <p className={this.state.active ? "active":""} onClick={this.clickedTitle}>
          {this.props.name}
          <strong>${this.props.price}</strong>
        </p>
      </div>
    );
  }
}

export default Course;

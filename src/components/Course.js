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

  }
  render(){
    return(
      <div>
        <p onClick={this.clickedTitle}>
          {this.props.name}
          <strong>{this.props.price}</strong>
        </p>
      </div>
    );
  }
}

export default Course;

import React, {Component} from 'react';

class Film extends Component {
  render(){
    return(
      <div className='film'>
        <ul>
          <li>
            <p>{this.props.title}</p>
          </li>
         </ul>
      </div>
    );
  }
}

export default Film;

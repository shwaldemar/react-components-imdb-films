import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
  render(){
    const filmNodes = this.props.data.map(film => {
      return (
        <a href="{film.url}"><Film title={film.name}></Film></a>
      );
    });

    return(
      <div className='film-list'>
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;

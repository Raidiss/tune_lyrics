import React from 'react';
import Song from './Song';

class List extends React.Component {

   render() {
       return ( 
         <div> 
            {this.props.songs.map((song, index) => (
               <Song key={index} song={song}/>
            ))}
         </ div>
      ); 
   }
}

export default List;
import React from 'react';
import Song from './Song';

class List extends React.Component {

   render() {
       return ( 
         <div> 
            {this.props.songs.map(song => (
               <Song song={song}/>
            ))}
         </ div>
      ); 
   }
}

export default List;
import React from 'react';

class Song extends React.Component {

   render() {
      return ( 
       <div>
         {this.props.song.name} by {this.props.song.artist}
         <a className="btn btn-info" target="blank" href={this.props.song.url}>Play</a> 
         <a className="btn btn-info" target="blank" href="call api to get lyrcis">Lyrics</a>
       </ div>
       
      );
   }
}

export default Song;
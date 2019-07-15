import React from 'react';
// import Lyric from './components/Lyric';

class Song extends React.Component {

   render() {
      let url = `/lyric/${this.props.song.artist}/${this.props.song.name}`;
      return ( 
       <div>
         {this.props.song.name} by {this.props.song.artist}
         <a className="btn btn-info" target="blank" href={this.props.song.url}>Play</a> 
         <a className="btn btn-info" href={url}>Lyrics</a>
       </ div>
       
      );
   }
}

export default Song;
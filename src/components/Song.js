import React from 'react';
import { Link } from 'react-router-dom';

class Song extends React.Component {

   render() {
      return ( 
       <div className="form-inline">
               <h6>{this.props.song.name} by {this.props.song.artist}</h6>
               <div className= "container-button">
                  <a className="btn btn-info" target="blank" href={this.props.song.url}>Play</a> 
               </div>
               <div className= "container-button">
                  <Link className= "btn btn-info" to={{
                     pathname: `/lyric/${this.props.song.name}`,
                     state: { 
                        song: this.props.song.name, 
                        artist: this.props.song.artist 
                        }
                     }}> View Lyric
                  </Link> 
               </div>
               
         </div>
       
      );
   }
}  

export default Song;
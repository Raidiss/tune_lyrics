import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import List from './components/List';


const API_KEY = "8faaf6b05b95bc467825607f43facf8f";

class App extends React.Component {
  state = {
    track: []
  }

  getSong = async (e) => {
    e.preventDefault();
    const song = e.target.elements.song.value;
    const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${API_KEY}&format=json`);
    const data = await api_call.json();
    console.log(this.state);
    this.setState(data.results.trackmatches)
  }

  render () {
    return ( 
    
    <div>
      <Titles></Titles>
      <Form getSong={this.getSong}></Form>
      <List songs={this.state.track}></List>
    </div>
    
    );
    }
  }



export default App;

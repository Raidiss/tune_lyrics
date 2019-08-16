// import React from 'react';
// import Form from './Form';
// import List from './List';


// const API_KEY = process.env.REACT_APP_API_KEY;

// class Home extends React.Component {
//   state = {
//     track: []
//   }

//   componentDidMount = () => {
//     const json = sessionStorage.getItem("track");
//     const track = JSON.parse(json);
//     if (track) {
//       this.setState({ track: track })
//     }
//   }

//   componentDidUpdate = () => {
//     const track = JSON.stringify(this.state.track)
//     sessionStorage.setItem("track", track)
//   }

//   getSong = async (e) => {
//     e.preventDefault();
//     const song = e.target.elements.song.value;
//     const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${API_KEY}&format=json`);
//     const data = await api_call.json();
//     this.setState(data.results.trackmatches)
//   }

//   render () {
//     return ( 
//       <div>
//         <Form getSong={this.getSong}></Form>
//         <List songs={this.state.track}></List>
//       </div>
//     );
//     }
//   }

// export default Home;

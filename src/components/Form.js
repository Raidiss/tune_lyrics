import React from 'react';

class Form extends React.Component {

   render() {
       return ( 
       
       <form onSubmit = {this.props.getSong}>
           <input type ="text" name = "song" placeholder = "Song..."></input>
           <button>Get Song</button>
       </form>
       
        );
           
   }

}

export default Form;
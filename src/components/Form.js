import React from 'react';

class Form extends React.Component {

   render() {
       return ( 
       
       <form onSubmit = {this.props.getSong} className="form-inline">
         <div className="form-group mb-2 mr-2">
            <input type ="text" name = "song" placeholder = "Type text to search songs" className= "form-control" autoComplete="off"></input>
        </div>  
           <button type="submit" className= "btn btn-info mb-2 mr-2">Get Song</button>
       </form>
       
        );
           
   }

}

export default Form;
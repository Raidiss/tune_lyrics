import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Lyric from './Lyric';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends React.Component {

    render () {
        return ( 
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/lyric/:artist/:song' component={Lyric}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
            </Switch>
        );
    }
}

export default Main;
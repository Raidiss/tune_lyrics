import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Lyric from './Lyric';
import App from '../App';

class Router extends React.Component {

    render () {
        return ( 
            <BrowserRouter>  
                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route path='/lyric' component={Lyric}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
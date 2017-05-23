import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path = "home" component = {Home}/>
            <Route path = "about" component = {About}/>
        </Route>
    </Router>
    )
    , document.getElementById('app'));

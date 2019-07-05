import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './index.css';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect } from 'react-router-dom';
import Search from "./Search";
import Home from "./Home";
import  Restaurant from "./Restaurant"




class App extends Component{





    render() {
        return (
            <Router>





                <Route path='/' >
                    <Redirect to="/home" />
                    <Route  path='/home' component={Home} />
                    <Route path='/rest' component={Search} />
                    <Route path='/restpage' component={Restaurant} />

                </Route>


            </Router>



        )

    }
}

ReactDOM.render(<App />, document.getElementById('sr'));
export default App;

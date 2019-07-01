import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './index.css';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from "./Search";
import Home from "./Home";



class App extends Component{





    render() {
        return (

            <div>
<Router>
                <Link to={"/home"}>home </Link>

                <Switch>
                    <Route  path='/home' component={Home} />
                    <Route path='/rest' component={Search} />
                </Switch>

</Router>
            </div>


        )

    }
}

ReactDOM.render(<App />, document.getElementById('index-div'));
export default App;

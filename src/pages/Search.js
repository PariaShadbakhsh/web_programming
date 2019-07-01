import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './index.css';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem/ListItem";


class Search extends Component{

    constructor(props) {
        super(props);
    }

    handleClick = () => {


        window.location.href = Restaurant;


    }

    componentWillMount(){


        //var encodedValue = encodeURI(this.state.inputValue);
        var url = 'http://localhost:5656/restaurants?area='+this.props.location.state.value ;
        alert(url);


        fetch(url,{


        })
            .then(response => response.json())
            .then(resData => {

                    this.setState({
                        items: resData.map(item => ({
                                address: item.address,
                                id: item.id,
                                comments: item.comments,
                                logo: item.logo,
                                averageRate : item.averageRate,

                            })
                        )
                    });
                    alert(resData[0].address.address_city);

            })

            .catch(error => {
                alert(error);
            });


    }


    render() {



        return (
            <div className={"div-react-search"} >

                {this.props.location.state.value}
                </div>

        )

    }
}


export default Search;

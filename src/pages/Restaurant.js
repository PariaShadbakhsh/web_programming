import createClass from "create-react-class";
import ReactDOM from 'react-dom'
import React, {Component, Fragment} from 'react';

import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {faStar} from  '@fortawesome/free-solid-svg-icons';
import {faStarHalf} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem/ListItem";
import Header from './header.js';
import './Restaurant.css'
import StarRating from './starRating'
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';

var Restaurant = createClass({

    getInitialState: function() {
        return {
            items: [],
            cat_list: [],
            ismounted: false,
            area: '',
            checkboxes: [],
            checkedItems: [],
            counts: [],
            boxStyle: {
                backgroundColor: 'white'
            },
        }

    },






    render(){

        return (
            <div>
                <Header></Header>
                <div className={"h"}>
                <div className={"header2-img"}></div>
                </div>
                {this.props.location.state.value}
            </div>
        )
    }


});
export default Restaurant;
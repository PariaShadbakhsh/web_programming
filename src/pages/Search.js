import ReactDOM from 'react-dom'
import React, {Component, Fragment} from 'react';
import './Search.css';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {faStar} from  '@fortawesome/free-solid-svg-icons';
import {faStarHalf} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem/ListItem";
import createClass from 'create-react-class';
import Header from './header.js';
import StarRating from './starRating'
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';
import Restaurant from "./Restaurant"




// noinspection JSAnnotator
var Search = createClass({


    getInitialState: function() {
        return {
            items:[],
            cat_list: [],
            ismounted : false,
            area : '',
            checkboxes:[],
            checkedItems: [],
            counts:[],
            boxStyle :{
                backgroundColor: 'white'
            },

        };

    },


    filterList: function(event){
        var updatedList =this.state.items;
        if(event.target.value) {
            updatedList = updatedList.filter(function (item) {
                return item.name.indexOf(event.target.value) > -1;

            });
            this.setState({items:updatedList});
        }
        else if(!(event.target.value)) {
            this.fetchApi();
        }
    },



    handleCheck: function(e) {
        let check_list = this.state.checkedItems;
        const item = e.target.name;
        const isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                checkedItems: [...this.state.checkedItems, item]
            },this.fetchQueries)
        }else{

            var index = check_list.indexOf(item);
            if (index > -1) {
                check_list.splice(index, 1);
                this.setState({
                    checkedItems: check_list
                }, this.fetchApi)

            }
        }







    },

    fetchApi: function(){
        var url = 'http://localhost:5656/restaurants?area='+this.props.location.state.value ;




        fetch(url,{


        })
            .then(response => response.json())
            .then(resData => {

                this.setState({
                    items: resData.map(item => ({
                            address: item.address,
                            openingTime : item.openingTime,
                            closingTime : item.closingTime,
                            id: item.id,
                            comments: item.comments,
                            logo: item.logo,
                            averageRate : item.averageRate,
                            name : item.name,
                            categories_r : item.categories_r,

                        })
                    )
                });




            })

            .catch(error => {
                alert(error);
            });



    },

    countCategory(category) {
        var firstList = this.state.items;
        const countTypes = firstList.filter(item => item.categories_r.find( cat =>
            cat.category_name === category
        ));

        return countTypes.length


    },


    fetchQueries: function(){


        axios.get('http://localhost:5656/category',{
            params: {
                area: this.state.area,
                category:  this.state.checkedItems
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
            .then((Res) => {
                // handle success

                this.setState({
                    items: Res.data.map(item => ({
                            address: item.address,
                            openingTime : item.openingTime,
                            closingTime : item.closingTime,
                            id: item.id,
                            comments: item.comments,
                            logo: item.logo,
                            averageRate : item.averageRate,
                            name : item.name,
                            categories_r : item.categories_r,

                        })
                    )
                });


            })
            .catch(function (error) {
                // handle error
                alert(error);
            })
            .finally(function () {

            });


    },



    fetchCheckbox: function() {

        var url = 'http://localhost:5656/categoryCheckbox';


        fetch(url,{
            method: 'GET',

        })
            .then(function(response) {
                return response.json();
            })
            .then(resData => {

                this.setState({
                    checkboxes: resData.data

                });
            })


            .catch(error => {
                alert(error);
            });




    },


    createCheckBoxes: function (cats){
        return cats.map ( (item ,i) => {


            return (
                <div className={"categories-div"}>
                    <div className={"cat-box"}>
                        <input className={"checkbox-input"} name={item.name}   type="checkbox" onChange={e => this.handleCheck(e)}  />
                        <label className={"label-checkbox"} key={i}></label>
                        <label className={"cat_num"}>
                            <span className={"cat-text"} key={i}>{item.name}</span>
                            <span>({ this.countCategory(item.name)})</span>
                        </label>
                    </div>
                </div>


            );


        },);
    },




    createBoxes: function (items) {


        return  items.map(item =>  {





            return (



                <div className={"container"}>

                    <Link className="link-router" to={{  pathname:'/restpage' ,state: {
                            value : item.id
                        }
                    }}
                    >
                    <div className={"box-rest"} style={this.state.boxStyle} >

                        <div className={"info-rest"}>
                            <div className={"logo-rest-div"}>

                                <img  width={"70%"} height={"60%"} />

                            </div>

                            <div className={"data-div"}>

                                <div className={"name-rest-div"}><p className={"name-rest"}>{item.name}</p></div>
                                <div className={"star-holder-div"}></div>
                                <div className={"list-items"}>
                                    {item.categories_r.map((cat,i) =>
                                        <p className={"one-list-item"} >{cat.category_name}</p>
                                    )}
                                </div>

                                <address className="rest-address">{item.address.address_Line}</address>
                            </div>

                        </div>
                        <div className={"button-wrap"}>
                            <div className={"order-button-div"}>

                                <Button class={"order-button"}>شروع سفارش</Button>

                            </div>

                        </div>

                    </div>


                    </Link>

                    <Switch>

                        <Route path='/restpage' render={props => <Restaurant value={item.id} />} />
                    </Switch>
                </div>

            );
        },);
    },

    componentWillMount: function(){




        this.state.ismounted = true;
        this.fetchCheckbox();


        this.setState({area : this.props.location.state.value});
        this.fetchApi();

        if(this.state.checkedItems.length === 0 ){
            alert("none");
            this.fetchApi();

        }



    },


    componentDidUpdate (){



        this.state.items.map((item) => {



            var current_time = new Date().getHours();

            var date1 = new Date(item.openingTime);
            var date2 = new Date(item.closingTime);

            var newDateOpen = date1.getHours();
            var newDateClose = date2.getHours();


            if (current_time > newDateClose &&
                current_time < newDateOpen ) {
                alert("closed");
                this.setState({
                    boxStyle :{
                        backgroundColor: 'grey'
                    },
                });
            }




        })


    },





    render(){

        const membersToRender = this.state.items;
        var num= membersToRender.length;




        return (

            <div>
                <Header></Header>
                <div className={"header-img"}></div>
                <div className={"info-rest"}>
                    <div className={"only-text-info"}>
                        <span>{num}</span> <span>رستوران امکان سرویس دهی به</span> <span>{this.state.area} </span> <span>را دارند</span>
                    </div>
                </div>
                <div className={"search-bar-div"}>
                    <input className={"search-bar-input"}  onChange={ this.filterList}/>
                    <label className={"label-input"}>جست و جوی رستوران در این محدوده</label>
                    <FontAwesomeIcon className={"faSearch-icon"} icon={faSearch}  size="0.6x" color="gray"/>

                </div>
                <div className={"rest-content"}>
                    <div className={"div-side-bar"} >
                        <div className={"filter-label"}>
                            <label >فیلتر بر اساس انواع غذا</label>
                        </div>
                        <div className={"search-category"}>
                            <input className={"search-category-input"} placeholder={"جست و جوی دسته بندی غذاها"}/>
                        </div>

                        {this.createCheckBoxes(this.state.checkboxes)}



                    </div>

                    <div className={"div-whole"} >

                        {this.createBoxes(this.state.items)}
                    </div>

                </div>


            </div>
        )

    }
});


export default Search;

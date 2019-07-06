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
import './index.css'
import StarRating from './starRating'
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';

var Restaurant = createClass({

    getInitialState: function() {
        return {
            itemsRes: [],
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


    componentWillMount: function(){


        this.fetchItem();


    },

    fetchItem: function(){
        var url = 'http://localhost:5656/restaurants/'+this.props.location.state.value ;


alert(url);

        fetch(url,{


        })
            .then(response => response.json())
            .then(res => {

                this.setState({
                    itemsRes: res.map(item => ({
                            address: item.address,
                            openingTime : item.openingTime,
                            closingTime : item.closingTime,
                            id: item.id,
                            comments: item.comments,
                            logo: item.logo,
                            averageRate : item.averageRate,
                            name : item.name,
                            categories_r : item.categories_r,
                            foods : item.foods,

                        })
                    )
                });





            })

            .catch(error => {
                alert(error);
            });

    },

    createBoxFood: function (items) {



        items.map((item )=> {


            return       item.foods.map((itemfood, i) => {

                         return (

                             <div className={"container-box"} key={i}>
                                 <div className={"box-res"}>

                                     <div className={"first-row"}>
                                         <div className={'food-name'}>{itemfood.food_name}</div>
                                         <div className={'food-price'}>{itemfood.price}</div>
                                     </div>
                                     <div className={"second-row"}>
                                         <div className={'description-div'}>
                                             <div className={"description-text"}>{itemfood.description}</div>
                                             <div className={"like-plus-button"}>
                                                 <button className={"button-add"}>افزودن به سبد خرید</button>
                                             </div>
                                         </div>
                                         <div className={'food-img'}>
                                             <img width={"100%"} height={"60%"}/>
                                         </div>
                                     </div>
                                 </div>
                             </div>


                         )

                     })

                 })


    },








    render(){



        return (
            <div>
            <div className={"all-page"}>
                <Header></Header>
                <div className={"head-div"}>

                <div className={"header2-img"}></div>
                    <div className={"info-box"}>
                        <div className={"center-div-info"}>
                            <ol className={"links-pages"}>
                                <li className={"one-link"}>
                                    <a className={"lin"}>ریحون</a>
                                    <span className={"sign"}></span>
                               </li>
                                <li className={"one-link"}>
                                    <a className={"lin"}></a>
                                    <span className={"sign"}></span>
                                </li>
                                <li className={"one-link"}>
                                    <a className={"lin"}></a>
                                </li>
                            </ol>

                            <div className={"return-div"}>
                                <a className={"return-link"}>بازگشت</a>
                            </div>
                            <div className={"logo-res-div"}>
                                <img   width={"100%"} height={"100%"}/>
                            </div>
                            <div className={"name-res-div"}>
                                <div className={"order-time"}>
                                    <div className={"order-time-inner"}>
                                        <span className={"time-text"}></span>
                                    </div>
                                </div>
                                <h1 className={"name-res"}>شیراز برگر</h1>
                            </div>
                            <div className={"stars-div"}></div>
                            <div className={"list-items-cats"}>

                                    <p className={"one-cat"} ></p>

                            </div>

                            <address className="res-address"></address>
                        </div>
                    </div>
                    <div className={"food-container"}>
                        <div className={"tabs-div"}>
                            <ul className={"tab-lists"}>
                                <li className={"tab-item"}><a>منوی رستوران</a></li>
                                <li className={"tab-item"}><a>اطلاعات رستوران</a></li>
                                <li className={"tab-item"}><a>نظرات کاربران</a></li>
                            </ul>
                        </div>
                        <div className={"menu-food-div"}>
                            <div className={"food-categories-div"}></div>
                            <div className={"food-menu-list"}>
                                { this.createBoxFood(this.state.itemsRes)}

                            </div>

                        </div>
                    </div>

                </div>


            </div>

                <div className="final-part">
                    <div className="middle-part-container">
                        <div className="content-box">
                            <div className="right-content">
                                <span className="empty-space" />
                                <p className="note-text">
                                    مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
                                </p>
                                <a className="list-rest-link">لیست رستوران ها</a>
                            </div>
                            <div className="extra-div">
                                <div className="left-content">
                                    <ul className="column1  first-pseudo">
                                        <li className="mobile-application-text">اپلیکیشن های موبایل</li>
                                        <li>
                                            <div className="download-app-column">
                                                <ul>
                                                    <li className="google-play">
                                                        <a />
                                                    </li>
                                                    <li className="ios-reyhoon">
                                                        <a />
                                                    </li>
                                                    <li className="bazar">
                                                        <a />
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="column1 second-pseudo">
                                        <li className="mobile-application-text">پشتیبانی ریحون</li>
                                        <li><a>سوالات متداول</a></li>
                                        <li><a>تماس با پشتیبانی</a></li>
                                        <li><a>قوانین و مقررات</a></li>
                                    </ul>
                                    <ul className="column1 third-pseudo">
                                        <li className="mobile-application-text">رستوران ها</li>
                                        <li><a>ثبت رستوران</a></li>
                                    </ul>
                                    <ul className="column1 fourth-pseudo">
                                        <li className="mobile-application-text">تماس با ریحون</li>
                                        <li><a>درباره ریحون</a></li>
                                        <li><a>تماس با ما</a></li>
                                        <li><a>وبلاگ ریحون</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two-logo-container">
                        <div className="logo-content">
                            <div className="logo-inner-photos">
                                <div className="logo-pic">
                                    <img src={require("../../pictures/logo2.png")} />
                                </div>
                                <div className="logo-pic">
                                    <img src={require("../../pictures/logo1.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container">
                        <div className="footer-content">
                            <ul className="icons-container">
                                <li>
                                    <a>
                    <span className="icon-span">
                      <i className="fab fa-telegram-plane" />
                    </span>
                                    </a>
                                </li>
                                <li><a>
                    <span className="icon-span">
                      <i className="fab fa-facebook-f" />
                    </span>
                                </a></li>
                                <li><a>
                    <span className="icon-span">
                      <i className="fab fa-twitter" />
                    </span>
                                </a></li>
                                <li><a>
                    <span className="icon-span">
                      <i className="fab fa-instagram" />
                    </span>
                                </a></li>
                                <li><a>
                    <span className="icon-span">
                      <i className="fab fa-google-plus-g" />
                    </span>
                                </a></li>
                            </ul>
                            <p className="copyright-note">
                                © 2017, <a>Reyhoon</a>, All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }


});
export default Restaurant;
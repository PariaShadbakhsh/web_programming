import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './index.css';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search.js';
import axios from 'axios';
import App from "./index";
import {Helmet} from "react-helmet";
import Typekit from 'react-typekit';







class Home extends Component {
    is_mounted = false;



    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputValue: ''
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeValue = this.changeValue.bind(this);


    }

    componentDidMount(){

        this.is_mounted = true;


    }

    componentWillUnmount(){
        this.is_mounted = false;
    }

    changeValue(event) {


        this.setState({inputValue: event.target.value});
    }

    handleSubmit() {


    }

    render () {
        return (

            <div id={"mydiv"}>

                <div id="row">
                    <div className="left">
                        <p>ورود</p>
                    </div>
                    <div className="verticalLine">
                    </div>
                    <div className="middle">
                        <p>عضویت</p>
                    </div>
                    <div className="right">
                        <p>راهنما</p>
                    </div>
                </div>
                <div className="parent_basic">
                    <div className="basic">
                        <img className="logo-reyhoon-img" src={require("../../pictures/Reyhoon-logo.png")} />
                        <div className="texts">
                            <div className="text-top">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</div>
                            <div className="text-down">برای دیدن لیست رستوران‌ها و فست‌فودهایی که به شما سرویس می‌دهند،منطقه خود را وارد کنید</div>
                            <form className="first-input-bar" id="search-option">
                                <div className={"div-react-search"} >


                                    <i className={"fa fa-angle-down"}></i>
                                    <input className={"input-bar-city"} name="bar_city" type="text"/>
                                    <i className={"fas fa-map-marker-alt"}></i>
                                    <div className={"wrap"}>
                                        <input className={"input-bar"} name="bar" type="text" placeholder="مثلا نیاوران" onChange={this.changeValue} />


                                        <Button className={"button-search"} onClick={this.handleSubmit} >



                                            <Link to={{  pathname:'/rest' ,state: {
                                                    value : this.state.inputValue
                                                }
                                            }} className="nav-link"
                                            >


                                                <FontAwesomeIcon icon={faSearch}  size="2x" color="white"/>
                                            </Link>;
                                        </Button>





                                    </div>


                                </div>
                            </form>
                            <div className="text-small">آخرین جستجو: تهران،شیخ هادی،چهارراه ولیعصر </div>
                        </div>
                    </div>
                    <div className="basic-right" />
                </div>
                <div className="text-details">
                    <div className="city-text"><p className="city-title">شهر و منطقه خود را وارد کنید</p></div>
                    <div className="food-text"><p className="food-title">غذای خود را انتخاب کنید</p></div>
                    <div className="delivery-text"><p className="delivery-title">غذایتان را نوش جان کنید</p></div>
                </div>
                <div className="details">
                    <div className="city-box">
                        <div className="city-inner-text"><p>منوی مورد علاقه خود را از بین بیش از<br /> 3500 رستوران خوب در تهران و<br /> شهرستان ها جستجو کنید.</p></div>
                        <div className="city-inner-photo">
                            <div className="photo1" />
                        </div>
                    </div>
                    <div className="food-box">
                        <div className="food-inner-text"><p>غذایی که می خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.</p></div>
                        <div className="food-inner-photo">
                            <div className="photo2" />
                        </div>
                    </div>
                    <div className="delivery-box">
                        <div className="delivery-inner-text"><p>درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.</p></div>
                        <div className="delivery-inner-photo">
                            <div className="photo3" />
                        </div>
                    </div>
                </div>
                <div className="middle-text">
                    <p>رستوران ها و فست فودهای برتر ماه بر اساس امتیازدهی کاربران</p>
                </div>
                <div className="restaurant-box">
                    <div className="first-box box_shadow1"><div className="first-box-details">
                        <div className="photo-section"><img id="img-rest" src /></div>
                        <p className="restaurant-title">فست فود پیتزا هات (سعادت آباد)</p>
                        <div className="stars-section">
                            <p className="rating-text">3.5</p>
                            <div className="rating-stars">
                  <span className="star-holder">
                    <span className="one-star">
                      <span className="second-span">
                        <span className="first-span">
                        </span>
                      </span>
                    </span>
                  </span>
                            </div>
                            <span className="num-text" />
                        </div>
                        <ul className="food-type">
                            <li className="one-section" />
                            <li className="one-section" />
                            <li className="one-section" />
                            <li className="one-section" />
                        </ul>
                        <address className="restaurant-address">سعادت آباد،پاساژ میلاد نور،طبقه همکف</address>
                        <button className="submit-btn">شروع سفارش</button>
                    </div></div>
                    <div className="second-box box_shadow2"><div className="second-box-details">
                        <div className="photo-section"><img id="img-rest2" src /></div>
                        <p className="restaurant-title">فست فود پیتزا هات (سعادت آباد)</p>
                        <div className="stars-section">
                            <p className="rating-text">3.5</p>
                            <div className="rating-stars">
                  <span className="star-holder">
                    <span className="one-star">
                      <span className="second-span">
                        <span className="first-span">
                        </span>
                      </span>
                    </span>
                  </span>
                            </div>
                            <span className="num-text" />
                        </div>
                        <ul className="food-type">
                            <li className="one-section">پیتزا</li>
                            <li className="one-section">فست فود</li>
                            <li className="one-section">ساندویچ</li>
                            <li className="one-section">برگر</li>
                        </ul>
                        <address className="restaurant-address">سعادت آباد،پاساژ میلاد نور،طبقه همکف</address>
                        <button className="submit-btn">شروع سفارش</button>
                    </div>
                    </div>
                    <div className="third-box box_shadow3"><div className="third-box-details">
                        <div className="photo-section"><img id="img-rest3" src /></div>
                        <p className="restaurant-title">فست فود پیتزا هات (سعادت آباد)</p>
                        <div className="stars-section">
                            <p className="rating-text">3.5</p>
                            <div className="rating-stars">
                  <span className="star-holder">
                    <span className="one-star">
                      <span className="second-span">
                        <span className="first-span">
                        </span>
                      </span>
                    </span>
                  </span>
                            </div>
                            <span className="num-text" />
                        </div>
                        <ul className="food-type">
                            <li className="one-section">پیتزا</li>
                            <li className="one-section">فست فود</li>
                            <li className="one-section">ساندویچ</li>
                            <li className="one-section">برگر</li>
                        </ul>
                        <address className="restaurant-address">سعادت آباد،پاساژ میلاد نور،طبقه همکف</address>
                        <button className="submit-btn">شروع سفارش</button>
                    </div>
                    </div></div>
                <div className="part4">
                    <div className="good-restaurants">
                        <p className="text-title">رستوران های خوب تهران در ریحون</p>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="ویترین" />
                            <h3 className="logo-text">ویترین</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="شاندیز جردن" />
                            <h3 className="logo-text">شاندیز جردن</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="تهیه غذای راد" />
                            <h3 className="logo-text">تهیه غذای راد</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="آمولای" />
                            <h3 className="logo-text">آمولای</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="جنارو" />
                            <h3 className="logo-text">جنارو</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="لانجین" />
                            <h3 className="logo-text">لانجین</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="جو گریل فود" />
                            <h3 className="logo-text">جو گریل فود</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="رستوران کوبابا" />
                            <h3 className="logo-text">رستوران کوبابا</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="تومو" />
                            <h3 className="logo-text">تومو</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="کترینگ و تشریفات ناریجه" />
                            <h3 className="logo-text">کترینگ و تشریفات ناریجه</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="امیرشکلات" />
                            <h3 className="logo-text">امیرشکلات</h3>
                        </a>
                        <a className="logo">
                            <img className="pic1 pic-box-shadow" src alt="شیرین پلو" />
                            <h3 className="logo-text">شیرین پلو</h3>
                        </a>
                    </div>
                </div>
                <div className="part5">
                    <div className="foods-row">
                        <div className="food-title-row">
                            <h2 className="text1">غذا چی میل دارید؟</h2>
                            <h3 className="text2">صبحانه،ناهار،شام یا هر چیزی که میل دارید را انتخاب کنید</h3>
                        </div>
                        <div className="food-pic-row">
                            <div className="box">
                                <div className="sandwich-pic">
                                    <div className="gradient" />
                                    <div className="sandwich-text">
                                        <h2 className="sandwich-title" />
                                        <p className="sandwich-subtitle" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="pizza-pic">
                                    <div className="gradient" />
                                    <div className="pizza-text">
                                        <h2 className="pizza-title">پیتزا</h2>
                                        <p className="pizza-subtitle">2142 رستوران فعال</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="burger-pic">
                                    <div className="gradient" />
                                    <div className="burger-text">
                                        <h2 className="burger-title">برگر</h2>
                                        <p className="burger-subtitle">2108رستوران فعال</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="kebab-pic">
                                    <div className="gradient" />
                                    <div className="kebab-text">
                                        <h2 className="kebab-title">غذای پلویی</h2>
                                        <p className="kebab-subtitle">1691رستوران فعال</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foods-tag">
                        <p className="more-foods-text">انتخاب غذاهای بیشتر</p>
                        <a className="food">خورشت</a>
                        <a className="food">کباب</a>
                        <a className="food">خوراک</a>
                        <a className="food">سوخاری</a>
                        <a className="food">پاستا</a>
                        <a className="food">سالاد</a>
                        <a className="food">چلوکباب</a>
                        <a className="food">فست فود</a>
                        <a className="food">غذای ایرانی</a>
                        <a className="food">بشقاب</a>
                        <a className="food">استیک</a>
                        <a className="food">صبحانه</a>
                        <a className="food">ماهی</a>
                        <a className="food">غذای دریایی</a>
                        <a className="food">هات داگ</a>
                        <a className="food">آبمیوه</a>
                    </div>
                </div>
                <div className="part7">
                    <div className="download-app">
                        <img className="mobile-app-img" src={require("../../pictures/mobile-app.png")} alt="اپ ریحون را دانلود کنید" width="40%" />
                        <div className="download-form">
                            <h3 className="download-title">ریحون روی موبایل</h3>
                            <p className="download-text">برای دریافت لینک دانلوداپلیکیشن ریحون،شماره موبایل خود را وارد کنید.</p>
                            <div className="mobile-input-bar-container">
                                <form className="mobile-input-bar">
                                    <input type="text" className="input-bar-only" placeholder="مثلا **91220530" autoComplete="off" />
                                    <button id="submit" type="submit" className="submit-button">
                                        <span className="button-text">دریافت لینک از طریق SMS</span>
                                    </button>
                                </form>
                            </div>
                            <p className="small-subtitle">اپلیکیشن ریحون برای Android و iOS در دسترس است.</p>
                            <div className="download-links">
                                <div className="img-wrapper">
                                    <img className="mobile-app-download-img" src={require("../../pictures/sibapp-light.png")} />
                                </div>
                                <div className="img-wrapper">
                                    <img className="mobile-app-download-img" src={require("../../pictures/google-play-light.png")} />
                                </div>
                                <div className="img-wrapper">
                                    <img className="mobile-app-download-img" src={require("../../pictures/cafebazaar-light.png")} />
                                </div>
                                <div className="img-wrapper">
                                    <img className="mobile-app-download-img" src={require("../../pictures/ios-direct-light.png")} />
                                </div>
                                <div className="img-wrapper">
                                    <img className="mobile-app-download-img" src={require("../../pictures/reyhoon-light.png")} />
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
                <script  src="JS_code.js"></script>

                <Switch>

                    <Route path='/rest' render={props => <Search value={this.state.inputValue} />} />
                </Switch>

            </div>

        );
    }

}


export default Home;

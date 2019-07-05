import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './Search.css';
import Button from '@material-ui/core/Button';






class Header extends Component{





    render() {
        return (

                <div className={"header-component"}>
                    <p className={"text-header"}>ورود</p>
                    <div className="verticalLine">
                    </div>
                    <p className={"text-header"}>عضویت</p>
                    <p className={"text-header"}>راهنما</p>
                    <div className="logo-img">
                    <img   src={require("../../pictures/Reyhoon-logo.png")} width={"112px"} height={"40px"} />
                    </div>
                </div>



        )

    }
}


export default Header;

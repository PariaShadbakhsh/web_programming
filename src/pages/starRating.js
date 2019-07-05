import React, { Component } from "react";
 import "./Search.css";

class StarRating extends Component {
    state = {
        selectedStars: 4.1,
        totalStars: 5
    };

    firstMethod = () => {
        const { selectedStars, totalStars } = this.state;
        return [...Array(totalStars)].map((el, i) =>
            i < selectedStars ? (
                <i key={i} className="fa fa-star" style={"color:yellow"}/>
            ) : (
                <i key={i} className="fa fa-star-o" />
            )
        );
    };

    secondMethod = () => {
        // implement the code for full, empty and half stars here.
        const { selectedStars, totalStars } = this.state;
        return [...Array(totalStars)].map((el, i) =>
            // check if current star should be half
            i < selectedStars && i + 1 > selectedStars ? (
                    <i key={i} className="fa fa-star-half-o" />
                ) : // check if current star should be full
                i < selectedStars ? (
                    <i key={i} className="fa fa-star"  />
                ) : (
                    // else, current star should be empty
                    <i key={i} className="fa fa-star-o" />
                )
        );
    };

    render() {
        const { selectedStars } = this.state;
        return (
            <React.Fragment>
                {Number.isInteger(selectedStars)
                    ? this.firstMethod()
                    : this.secondMethod()}
            </React.Fragment>
        );
    }
}

export default StarRating;

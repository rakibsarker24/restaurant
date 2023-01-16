import React, { Component } from "react";
import {IoIosArrowForward} from 'react-icons/io'
// import { CiLocationOn} from 'react-icons/ci';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block", background: "red", padding:"5px", }}
        onClick={onClick}
      >
        <IoIosArrowForward className="text-para"/>
      </div>
    );
}

export default SampleNextArrow;
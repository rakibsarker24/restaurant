import React, { Component } from "react";
import {IoIosArrowBack} from 'react-icons/io'


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block", background: "red", padding:"5px" }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-para"/>
      </div>
    );
}

export default SamplePrevArrow;
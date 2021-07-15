import React from 'react';
import { Link } from 'react-router-dom';
const COUNTRY = (props) => {
    const {name,flag}= props.countrys;
    // ===============================style-sid======================================
    const totalDiv = {
          border: "1px solid red",
          textAlign: "center",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px"
    }
    const button = {
        color: "blue",
        padding: "10px",
        borderRadius: "5px",
        marginButton: "50px"
    }
    const ImgStyle = {height: "200px", width: "200px"}
    return (
        <div style={totalDiv}>
            <img src={flag} style={ImgStyle} alt=""/>
            <h1>{name}</h1>
            <Link to={`/country/${name}`}><button style={button}>show Details</button></Link>
        </div>
    );
};

export default COUNTRY;
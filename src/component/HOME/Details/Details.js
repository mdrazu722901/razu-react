import React from 'react';

const Details = (props) => {
    const data = props.country;
    const {name,capital,area,flag,population,region} = data;
    return (
        <div>
            <img src={flag} alt="" />
            <h1>Name:{name}</h1>
            <h2>capital:{capital}</h2>
            <h3>region:{region}</h3>
            <h3>area:{area}</h3>
            <h3>population:{population}</h3>
        </div>
    );
};

export default Details;
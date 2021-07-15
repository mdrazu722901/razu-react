import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../HOME/Details/Details';
import DETAILS from '../HOME/Details/Details';

const COUNTRYDATEILS = () => {
    const {name} = useParams([]);
    const [country, setCountry] = useState([]);
      useEffect(()=>{
           const url = `https://restcountries.eu/rest/v2/name/${name}`;
           fetch(url)
           .then(res => res.json())
           .then(data => setCountry(data))
       },[])
    return (
        <div>
           {
               country.map(country => <Details country={country}></Details>)
           }
        </div>
    );
};

export default COUNTRYDATEILS;
import React, { useEffect, useState } from 'react';
import COUNTRY from '../COUNTRY/COUNTRY';

const HOME = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountrys(data))
    },[]);
    return (
        <div>
            <h1>Total Country:{countrys.length}</h1>
            {
                countrys.map(countrys => <COUNTRY countrys={countrys}></COUNTRY>)
            }
        </div>
    );
};

export default HOME;
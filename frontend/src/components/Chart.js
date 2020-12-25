import React, {useState} from 'react'
const axios = require('axios');

export default function Chart() {
    const [data, setData] = useState([]);

    let getData = () =>{
        axios
        .get("https://disease.sh/v3/covid-19/nyt/counties/hays?lastdays=30")
        .then((res) => {
            setData(res);
            console.log(data);
        })
        .catch((err) => console.log(err))

    }
    return (
        <div>
            {getData()}  
        </div>
    )
}

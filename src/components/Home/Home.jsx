import React from "react";
import {useState , useEffect} from "react";
import axios from "axios";

const Home = (props) => {
  const [qod, setQuoteOFDay] = useState([])

  
  useEffect(() =>{
    getQuoteOfDay();
  },[props.toggle])

  const getQuoteOfDay = async () => {
    var results = await axios ({
        method: 'GET',
        url : "https://quotes.rest/qod?language=en",
    })
    console.log(results.data);
    setQuoteOFDay(results.data)
  }


return (
    <div>
        <div className="homepage">
            <h5>This is the Home Page</h5>
            <h5>{props.getQuoteOfDay}</h5>
        </div>
    </div>
  );
};

export default Home;
import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard';
import "./style.css"

const Temp = () => {
const [searchValue, setSaerchValue]= useState("Kurigram");
const[tempInfo, setTempInfo]= useState({})
const getWeatherInfo =async ()=>{
 try{
  let url =
  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d00d5147bb77f2ac24fb7629586526fb`;

  const res = await fetch(url);
  const data = await res.json();

  const { temp, humidity, pressure } = data.main;

  const {main: weathermood } = data.weather[0];
  const {name} = data;
  const{country, sunset}= data.sys;
  // console.log(temp);


  const myNewWeatherInfo = {
    temp, humidity, pressure, weathermood, name,country,sunset
  };
  setTempInfo(myNewWeatherInfo);



 }catch(error){
  console.log(error)
 }
};

useEffect(() =>{

  getWeatherInfo();
}, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTeam"

            value={searchValue}
            onChange={(e) => setSaerchValue(e.target.value)}

          />
          <button onClick={getWeatherInfo} className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>

      {/* our temp card */}
      <Weathercard tempInfo={tempInfo}/>
    
    </>
  );
}

export default Temp
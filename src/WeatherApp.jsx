import Search from "./search";
import InfoBox from "./infoBox";
import { useState } from "react";
function WeatherApp(){
    let [weatherInfo, SetWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:38.45,
        humidity:61,
        temp:32.44,
        tempMax:32.44,
        tempMin:32.44,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo);
        }
    return(
        <div>
            <h3 style={{marginLeft:"25rem"}}>Weather Information</h3>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
export default WeatherApp;
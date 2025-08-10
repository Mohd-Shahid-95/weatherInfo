import './search.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
function Search({updateInfo}) {
     let [city, SetCity]=useState('');
     let [error, SetError]=useState(false);
    const api_url = import.meta.env.VITE_API_URL;
    const api_Key = import.meta.env.VITE_API_KEY;

    let getWheaterInfo= async()=>{
      try{
        let response=await fetch(`${api_url}?q=${city}&appid=${api_Key}&units=metric`);
      let responseJson= await response.json();
      let result={
        city:city,
        temp:responseJson.main.temp,
        tempMin:responseJson.main.temp_min,
        tempMax:responseJson.main.temp_max,
        humidity:responseJson.main.humidity,
        feelsLike:responseJson.main.feels_like,
        weather:responseJson.weather[0].description,
      }
       console.log(result);
       return result;
      } catch(error){
        throw error;
      }
    };
    let handlingChange=(event) =>{
          SetCity(event.target.value);
    }
    let handlesubmit=async(event)=>{
        try{event.preventDefault();
        console.log(city);
       SetCity('');
      let newInfo=await getWheaterInfo();
      updateInfo(newInfo);
      }catch(error){
         SetError(true)
        }
    }
  return (
    <div className="SearchBox">
        <form onSubmit={handlesubmit}>
            <TextField id="City" label="City Name" variant="outlined" required 
            value={city}
            onChange={handlingChange}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
    </div>
  )
}

export default Search;
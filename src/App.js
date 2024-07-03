
import axios from "axios";
import { useEffect, useState } from "react";

const API_endPoint = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "bd57a27c6eda99aa79304443e45e6f82";

function App() {

  const [latitude,setLatitude]=useState('');
  const [longitude, setLongitude] = useState('');
  const [wheatherData,setWheatherData]=useState({})


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
  },[])

  useEffect(() => {
    const fetchWheatherData=async ()=>{
      if(latitude&longitude){
        let final_endpoint = `${API_endPoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;
        
        try {
            const response=await axios.get(final_endpoint);
            console.log(response.data);
            setWheatherData(response.data)
        } catch (error) {
            console.log('error fetching data:',error);
        }

      }
    }
    fetchWheatherData();

  }, [longitude,latitude]);

  return (
      <div className="App">
          <div className="container">
              <div className="top">
                  <div className="location">
                      <h1>{wheatherData.name}</h1>
                  </div>
                  <div className="temp">
                      <h2>{wheatherData?.main?.temp} degree f</h2>
                  </div>
                  <div className="description">{}</div>
              </div>
              <div className="bottom">
                  <div className="location"></div>
                  <div className="location"></div>
                  <div className="location"></div>
              </div>
          </div>
      </div>
  );
}

export default App;

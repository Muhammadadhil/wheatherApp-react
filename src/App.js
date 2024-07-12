import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

const API_endPoint = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "bd57a27c6eda99aa79304443e45e6f82";

function App() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        const fetchWheatherData = async () => {
            if (latitude & longitude) {
                let final_endpoint = `${API_endPoint}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`;

                try {
                    const response = await axios.get(final_endpoint);
                    console.log(response.data);
                    setWeatherData(response.data);
                } catch (error) {
                    console.log("error fetching data:", error);
                }
            }
        };
        fetchWheatherData();
    }, [longitude, latitude]);

    // if(weatherData==undefined){
    // console.log('ivvvvvvvvvvvvvvvvvvvdeeeeeeeeeeeeeeeeeee');
    // return <h1>loading...</h1>
    // }
    console.log("weatherData:", weatherData);
    const cityName = weatherData?.name;
    // const country = weatherData?.sys?.country;
    const temperature = weatherData?.main?.temp;
    const feelsLike = weatherData?.main?.feels_like;
    const tempMin = weatherData?.main?.temp_min;
    const tempMax = weatherData?.main?.temp_max;
    const humidity = weatherData?.main?.humidity;
    const pressure = weatherData?.main?.pressure;
    // const weatherMain = weatherData?.weather[0]?.main;
    // const weatherDescription = weatherData?.weather[0]?.description;
    const windSpeed = weatherData?.wind?.speed;
    const windDirection = weatherData?.wind?.deg;

    return (
        <div className="App bg-neutral-300 h-screen flex items-center justify-center">
            {/* <div className="container">
              <div className="top">
                  <div className="location ">
                      <h1 className="flex justify-center font-extrabold text-2xl">{wheatherData.name}</h1>
                  </div>
                  <div className="temp">
                      <h2 className="font-extrabold text-2xl">{wheatherData?.main?.temp} degree f</h2>
                  </div>
                  <div className="description">{}</div>
              </div>
              <div className="bottom">
                  <div className="location"></div>
                  <div className="location"></div>
                  <div className="location"></div>
              </div>
          </div> */}
            <div className="container w-7/12 h-4/6 bg-white rounded-3xl overflow-hidden flex items-center shadow-2xl">
                <div className="left-sec w-3/4 h-full  bg-white flex-col shadow-inner">
                    <div className="head flex justify-around p-5 items-center text-zinc-600">
                        <h2>{weatherData.name}</h2>
                        <h2>21.04.21</h2>
                    </div>
                    <div className="main-temp flex flex-wrap items-center justify-center p-32">
                        <h1 className="relative text-9xl font-medium text-zinc-600">
                            {Math.floor(weatherData?.main?.temp)}
                            <span className="absolute text-7xl font-bold ">°</span>
                        </h1>

                        <div>
                            <h2 className="text-xl text-zinc-600 px-11">61.1 mph</h2>
                            <h2 className="text-xl text-zinc-600 px-11">90 %</h2>
                        </div>
                        <h2 className="w-full text-center text-2xl font-medium text-zinc-600">Cloudy</h2>
                    </div>
                    <div className="weakly-forcast  px-12 flex justify-center gap-4 text-zinc-600">
                        <div className="w-24 h-32 hover:border border-solid rounded-xl text-center py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border  text-center rounded-xl border-solid py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border text-center rounded-xl border-solid py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border text-center rounded-xl border-solid py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border text-center rounded-xl border-solid rounded py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border text-center rounded-xl rounded py-5 hover:border-gray-300 transition-all duration-500 ">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                        <div className="w-24 h-32 hover:border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3>Tuesday</h3>
                            <h3>20 °</h3>
                            <h3>Mist</h3>
                        </div>
                    </div>
                </div>
                <div className="right-sec  bg-stone-100 w-1/4 h-full text-center py-5 shadow-inner text-zinc-600">
                    <div className="inline-block">
                        <h1 className="">Good Morning</h1>
                        <h2 className="py-5">12:27 PM</h2>
                        <div className="main-temp flex flex-wrap items-center justify-center mt-5">
                            <h1 className="relative text-5xl font-medium">
                                {Math.floor(weatherData?.main?.temp)}
                                <span className="absolute text-xl font-bold ">°</span>
                            </h1>

                            <div className="">
                                <h2 className="text-sm px-5">61.1 mph</h2>
                                <h2 className="text-sm px-5">90 %</h2>
                            </div>

                            <div className="w-full text-center mt-5 ">
                                <h5>Feels like 19%</h5>
                            </div>
                            <h2 className="w-full text-center text-xl font-medium text-zinc-600">Cloudy</h2>
                        </div>
                    </div>
                    <div className="py-20 flex flex-wrap justify-center gap-2">
                        <h1 className="w-full">Hourly Forcast</h1>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM </h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM</h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM</h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM</h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM</h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                        <div className="w-20 h-32 border text-center rounded-xl py-5 hover:border-gray-300 transition-all duration-500">
                            <h3 className="text-black">1 PM</h3>
                            <h3>20 °</h3>
                            <h3>Moody</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

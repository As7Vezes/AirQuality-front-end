import { getWeather } from '@/app/api/weatherApi';
import React, { useEffect, useState } from 'react';
import { FaCloudRain } from "react-icons/fa";

type Local = {
  lat: number,
  lng: number
}

const WeatherComponent: React.FC<{ local: Local }> = ({ local }) => {

  const { lat, lng }: Local = local;
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather({ lat, lng });
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do tempo", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg rounded-lg w-[500px] h-[182px] p-4 flex justify-center items-center text-white">
        <p>Carregando dados do tempo...</p>
      </section>
    );
  }

  if (!weatherData) {
    return (
      <section className="bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg rounded-lg w-[500px] h-[182px] p-4 flex justify-center items-center">
        <p>Não foi possível carregar os dados do tempo.</p>
      </section>
    );
  }

  const { temp, city_name, weather, rh, weather: { description, icon }, precip } = weatherData.data[0];

  const now = new Date();

  const day = now.getDate(); 
  const year = now.getFullYear(); 
  const dayOfWeek = now.toLocaleDateString('pt-BR', { weekday: 'long' }); 
  const month =now.getMonth() + 1; 


  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg rounded-lg w-[500px] h-[182px] p-4 flex flex-col justify-between">
      <div id="loading" className="hidden">
        <img src="/img/loadGif.gif" alt="Carregando..." className="w-16 h-auto mx-auto" />
      </div>

      <article className="grid grid-cols-2 gap-4 h-full">
        {/* Weather Info */}
        <section className="flex flex-col justify-between">
          <h3 id="city_name" className="text-white font-bold text-2xl">{city_name}</h3>
          <time id="date" className="text-white text-lg">{day}/{month}/{year}</time>
          <figure className="flex flex-col items-center">
            <img id="weather_icon" src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="Weather Icon" className="w-16 h-16" />
            <figcaption id="weather_description" className="text-white text-lg mt-2">{description}</figcaption>
          </figure>
        </section>

        {/* Temperature and Info */}
        <section className="flex flex-col justify-between items-center">
          <h2 id="temperature" className="text-white text-4xl">{temp}°C</h2>
          <article className="flex items-center text-white text-lg">
            <i className="fa-solid fa-cloud-rain text-xl mr-2"></i>
            <FaCloudRain className="text-xl mr-2"/>
            <span id="rainProbability" className="text-blue-600 font-bold">{precip}%</span>
          </article>
          <article className="text-white text-lg">
            <span id="humidity">Humidade: {rh}%</span>
          </article>
        </section>
      </article>
    </section>
  );
};

export default WeatherComponent;

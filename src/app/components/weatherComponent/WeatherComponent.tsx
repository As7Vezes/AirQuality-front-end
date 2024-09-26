import React from 'react';

const WeatherComponent: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg rounded-lg w-[500px] h-[182px] p-4 flex flex-col justify-between">
      <div id="loading" className="hidden">
        <img src="/img/loadGif.gif" alt="Carregando..." className="w-16 h-auto mx-auto" />
      </div>

      <article className="grid grid-cols-2 gap-4 h-full">
        {/* Weather Info */}
        <section className="flex flex-col justify-between">
          <h3 id="city_name" className="text-white font-bold text-2xl">City Name</h3>
          <time id="date" className="text-white text-lg">Date</time>
          <figure className="flex flex-col items-center">
            <img id="weather_icon" src="" alt="Weather Icon" className="w-16 h-16" />
            <figcaption id="weather_description" className="text-white text-lg mt-2">Weather Description</figcaption>
          </figure>
        </section>

        {/* Temperature and Info */}
        <section className="flex flex-col justify-between items-center">
          <h2 id="temperature" className="text-white text-4xl">25°C</h2>
          <article className="flex items-center text-white text-lg">
            <i className="fa-solid fa-cloud-rain text-xl mr-2"></i>
            <span id="rainProbability" className="text-blue-600 font-bold">50%</span>
          </article>
          <article className="text-white text-lg">
            <span id="humidity">Humidity: 60%</span>
          </article>
        </section>
      </article>
    </section>
  );
};

export default WeatherComponent;

type getWeatherProps = {
    lat: number,
    lng: number
}


export const getWeather = async ({ lat, lng }: getWeatherProps) => {

    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Falha ao buscar dados da API!");
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.error("Erro ao consumir API!", error);
        throw error;
    }
    

}
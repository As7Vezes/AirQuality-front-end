type getWeatherProps = {
    lat: number,
    lng: number
}


export const getWeather = async ({ lat, lng }: getWeatherProps) => {
    try {

       /*  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; */
        if (!apiKey) {
            throw new Error("API Key não está definida.");
        }

        const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Falha msm do negócio mano ao buscar dados da API!");
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro da API: ${response.status} - ${errorText}`);
        }

        const data = response.json();
        return data;

    } catch (error) {
        console.error("Erro na função getWeather:", error);
        throw error;
    }

    /* const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt`;

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
    } */

}
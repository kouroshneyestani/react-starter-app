import { useState } from "react";
// import { getWeatherIcon } from "./utils/weatherIcons";

const SearchIcon = ({ width = 16, height = 16 }) => (
    <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 122.879 119.799"
        enableBackground="new 0 0 122.879 119.799"
        xmlSpace="preserve"
        className="fill-current"
    >
        <g>
            <path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" />
        </g>
    </svg>
);

const CaretDownIcon = ({ width = 24, height = 24 }) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
            />
        </svg>
    </>
);

const Button = () => <button></button>;

function WeatherApp() {
    const [days] = useState(7);
    const [error, setError] = useState("");
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city) {
            setError("Please enter a city name.");
            setWeather(null);

            return;
        }

        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const response = await fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Response Error:", errorData);

                // Set error from the API response if available
                setError(errorData.error?.message || "An unexpected error occurred.");
                setWeather(null); // Clear weather data

                return;
            }

            const data = await response.json();

            setWeather(data); // Set weather data
            setError(""); // Clear any previous errors

            console.log("Weather data:", data); // Log the weather data
        } catch (error) {
            console.error("Error fetching weather data:", error);

            // Handle unexpected errors
            setError("An unexpected error occurred while fetching weather data.");
            setWeather(null);
        }
    };

    const Header = () => {
        return (
            <header className="px-6 py-4 mb-2 shadow-md rounded-3xl bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div>
                                <button
                                    type="submit"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#EBEAE6]"
                                >
                                    <SearchIcon />
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Search for places ..."
                                    className="!bg-transparent selection:bg-transparent focus:outline-none focus:ring-0 autofill:shadow-[inset_0_0_0_1000px_transparent] w-full h-full placeholder:text-inherit placeholder:opacity-60"
                                    onChange={handleChange}
                                    value={city}
                                />
                            </div>
                        </div>
                        <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#EBEAE6]">
                            <CaretDownIcon />
                        </button>
                    </div>
                </form>
            </header>
        );
    };

    const WeatherCurrent = () => (
        <div className="flex items-center">
            <div className="flex flex-col gap-6">
                <header>
                    <h3 className="w-full flex items-center justify-between text-xl font-semibold gap-2">
                        <span>Today's Highlights: </span>
                        <small>
                            {`${weather.location.name}, 
                            ${weather.location.country},
                            ${weather.location.tz_id}`}
                        </small>
                    </h3>
                </header>
                <aside className="rounded-3xl p-6 bg-white">
                    <ul>
                        <li>
                            <div className="flex items-center gap-1">
                                {/* Weather Icon */}
                                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#EBEAE6] me-4">
                                    <img
                                        src={weather.current.condition.icon}
                                        alt={weather.current.condition.text}
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                {/* Temperature */}
                                <div className="font-semibold flex items-start gap-1">
                                    <span className="text-4xl leading-none">{weather.current.temp_c}</span>
                                    <div className="flex items-center">
                                        <span>°</span>
                                    </div>
                                </div>
                                <div className="h-full flex items-end relative top-2">
                                    <small>{weather.current.condition.text}</small>
                                </div>
                            </div>
                            {/* Local Time and Formatted Date */}
                            <div className="font-semibold mt-2 p-2">
                                {/* Extract and display day */}
                                <div className="flex items-center gap-1">
                                    <span>
                                        {new Date(weather.location.localtime).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        })}
                                    </span>
                                </div>
                                <span>
                                    {new Date(weather.location.localtime).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}{" "}
                                    <span> - </span>
                                    {new Date(weather.location.localtime).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );

    const WeatherForecast = () => (
        <div className="flex flex-col gap-6">
            <header>
                <h3 className="text-xl font-semibold">Next Week</h3>
            </header>
            <div className="flex items-center justify-between gap-3">
                {weather?.forecast?.forecastday?.slice(1, 7).map(
                    (
                        item,
                        index // Exclude the first item
                    ) => (
                        <aside
                            key={index}
                            className={`w-full text-sm rounded-3xl p-2 flex flex-col items-center justify-center bg-white`}
                        >
                            <div className="font-semibold flex items-center gap-1 mb-1">
                                <div className="flex items-center gap-1 text-center">
                                    <span>
                                        {new Date(item.date).getDate()}
                                        th,
                                    </span>
                                    <span className="text-end">
                                        {new Date(item.date).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={item.day.condition.icon}
                                    alt={item.day.condition.text}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <span>{item.day.maxtemp_c}°</span>
                                <span className="opacity-60">{item.day.mintemp_c}°</span>
                            </div>
                        </aside>
                    )
                )}
            </div>
        </div>
    );

    return (
        <div className={`w-full min-h-screen bg-[#EBEAE6]`}>
            <section className="max-w-3xl mx-auto p-10">
                <Header />
                <div className="relative pt-6">
                    {/* Display weather data if available */}
                    {weather && (
                        <div className="flex flex-col gap-6">
                            <WeatherCurrent />
                            <WeatherForecast />
                        </div>
                    )}
                    {/* Display error messages */}
                    {error && <p className="text-red-400">{error}</p>}
                </div>
            </section>
        </div>
    );
}

export default WeatherApp;

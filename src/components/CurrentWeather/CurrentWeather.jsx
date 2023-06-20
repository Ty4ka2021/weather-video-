import React from "react"
import s from "./CurrentWeather.module.css"

const CurrentWeather = ({ data }) => {
	return (
		<div className={s.CurrentWeather}>
			<div className={s.top}>
				<div>
					<p className={s.city}>{data.city}</p>
					<p className={s.desc}>{data.weather[0].description}</p>
				</div>
				<img className={s.weatherIcon} src={`icons/${data.weather[0].icon}.png`} alt="weather" />
			</div>

			<div className={s.bottom}>
				<p className={s.temperature}>{Math.round(data.main.temp)}°C</p>
				<ul className={s.details}>

					<li className={s.parameterRow}>
						<span className={s.parameterLabel}>Details</span>
					</li>

					<li className={s.parameterRow}>
						<span className={s.parameterLabel}>Feels like</span>
						<span className={s.parameterValue}>{Math.round(data.main.feels_like)}°C</span>
					</li>

					<li className={s.parameterRow}>
						<span className={s.parameterLabel}>Wind</span>
						<span className={s.parameterValue}>{data.wind.speed} m/s</span>
					</li>

					<li className={s.parameterRow}>
						<span className={s.parameterLabel}>Humidity</span>
						<span className={s.parameterValue}>{data.main.humidity} %</span>
					</li>

					<li className={s.parameterRow}>
						<span className={s.parameterLabel}>Pressure</span>
						<span className={s.parameterValue}>{data.main.pressure} hPa</span>
					</li>
					{/*  */}


				</ul>
			</div>
		</div>
	)
}

export default CurrentWeather
import React, { useState } from "react"
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, options } from '../../api'

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null)

	const handleOnChange = (searchData) => {
		setSearch(searchData)
		onSearchChange(searchData)
	}

	const loadOptions = (inputValue) => {
		return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, options)
			.then(response => response.json())
			.then(response => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						}
					})
				}
			})
			.catch(err => console.error(err))
	}

	return (
		<AsyncPaginate
			placeholder="Search for city"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	)
}

export default Search
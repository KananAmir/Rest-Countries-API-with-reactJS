import React from 'react'
import './search_filter.scss'
const SearchFilter = () => {
    return (
        <div className="search-filter">
            <div className="input-div">
                <input type="search"  placeholder="Search for a country.."/>
                <i className="fas fa-search"></i>
            </div>
            <select name="filter" id="filter">
                <option value="africa">Filter by the Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchFilter

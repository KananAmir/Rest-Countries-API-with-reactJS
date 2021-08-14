import React from 'react'
import './country.scss'
import { CountryDto } from './../../core/interfaces/country.dto';
import { NavLink } from "react-router-dom";


const Country = (props: CountryDto) => {
    return (
        <NavLink to={`/countries/${props.alpha2Code}`}>
        <div className="country">
                    <img className="country_flag" src={props.flag} alt="flag" />
                    <div className="country_content">
                        <h2 className="country_name">{props.name}</h2>
                        <p><strong>Population: </strong>{props.population}</p>
                        <p><strong>Region: </strong> {props.region}</p>
                        <p><strong>Capital: </strong> {props.capital}</p>
                    </div>
        </div>
        </NavLink>
    )
}

export default Country

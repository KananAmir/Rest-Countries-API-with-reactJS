import React from 'react'
import './country.scss'
import { CountryDto } from './../../core/interfaces/country.dto';


const Country = (props: CountryDto) => {
    return (
        <div className="country">
                    <img className="country_flag" src={props.flag} alt="flag" />
                    <div className="country_content">
                        <h2 className="country_name">{props.name}</h2>
                        <p><strong>Population: </strong>{props.population}</p>
                        <p><strong>Region: </strong> {props.region}</p>
                        <p><strong>Capital: </strong> {props.capital}</p>
                    </div>
        </div>
    )
}

export default Country

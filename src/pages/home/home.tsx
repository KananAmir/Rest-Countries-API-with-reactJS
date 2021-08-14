import { observer } from "mobx-react";
import React from "react";
// import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import SearchFilter from "../../components/input_and_search/SearchFilter";
import Country from "../../components/country/Country";
import CountriesService from "./../../core/services/countries_service";
import { CountryDto } from "./../../core/interfaces/country.dto";
import { Modal } from "antd";

interface MyState {
  countries: Array<CountryDto>;
}

@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  
  private countriesService: CountriesService = new CountriesService();
  state: MyState = {
    countries: [],
  };
  componentDidMount() {
    this.getCountries();
  }

  private getCountries = async () => {
    try {
      const countries = await this.countriesService.getAll();
      this.setState({
        countries,
      });
    } catch (error) {
      console.error(error);
      Modal.error({
        title: "Error",
      });
    }
  };

  private getCountryBySearch = (searchCountry: string) => {
    console.log(searchCountry);
    this.setState({
      searchCountry,
    });
  };

  render() {
    return (
      <div>
        <SearchFilter handleChangeSearchInput={this.getCountryBySearch} />

        <div className="all_countries">
          <div className="row mt-5">
            {this.state.countries.map((country: CountryDto) => (
              <div key={country.name} className="col-12 col-md-4 col-lg-3 mb-5">
                <Country
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  alpha2Code={country.alpha2Code}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

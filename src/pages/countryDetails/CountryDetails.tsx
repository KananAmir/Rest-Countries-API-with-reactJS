import React, { Component } from "react";
import CountriesService from "./../../core/services/countries_service";
import { CountryDetailDto } from "./../../core/interfaces/countryDetailDto";
import { Modal } from "antd";
import "./country-details.scss";
import flag from './../../assests/geo.svg'
interface MyProps {
  history: any;
  match: any;
}

interface MyState {
  detailedCountry?: CountryDetailDto;
}
class CountryDetails extends Component<MyProps, MyState> {
  private countriesService: CountriesService = new CountriesService();

  state: MyState = {
    detailedCountry: undefined,
  };

  componentDidMount() {
    this.getDetail(this.props.match.params.alpha2Code);
  }

  private getDetail = async (alpha2Code: string) => {
    try {
      const detailedCountry = await this.countriesService.getDetail(alpha2Code);
      this.setState({ detailedCountry });
    } catch (error) {
      Modal.error({
        title: "Error",
      });
    }
  };

  render() {
    const { detailedCountry } = this.state;
    return (
      <div className="country_detail">
        <img src={flag} alt="flag" className="flag"/>

        <div className="detail_content">
          <h2>
            <strong>{detailedCountry?.name}</strong>
          </h2>
          <br />
          <div className="left-right">
            <div className="left">
              <p>
                <strong>Population:</strong>
                {detailedCountry?.population}
              </p>
              <p>
                <strong>Native Name:</strong>
                {detailedCountry?.nativeName}
              </p>
              <p>
                <strong>Region:</strong>
                {detailedCountry?.nativeName}
              </p>
              <p>
                <strong>Sub Region:</strong>
                {detailedCountry?.subregion}
              </p>
              <p>
                <strong>Capital:</strong>
                {detailedCountry?.capital}
              </p>
            </div>

            <div className="right">
              <p>
                <strong>Top Level Domain:</strong>
                {detailedCountry?.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>
                {detailedCountry?.currencies.map((cur) => cur.name)}
              </p>
              <p>
                <strong>Languages:</strong>
                {detailedCountry?.languages.map((lang) => lang.name).join(" ")}
              </p>
            </div>
          </div>
          <br />
          <br />
          <p className="borders">
            <strong>Border Countries:</strong>
            {detailedCountry?.borders.join(" ")}
          </p>
        </div>
      </div>
    );
  }
}

export default CountryDetails;

import { CountryDto } from "../interfaces/country.dto";
import { CountryDetailDto } from "../interfaces/countryDetailDto";
import { AxiosResponse } from "axios";
import http from "./http"
export default class CountriesService {
    async getAll(): Promise<CountryDto[]> {
        try {
            const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/all`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


async getDetail(alpha2Code: string): Promise<CountryDetailDto>{
        try {
            const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/alpha/${alpha2Code}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
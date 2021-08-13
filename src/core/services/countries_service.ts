import { CountryDto } from "../interfaces/country.dto";
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
}

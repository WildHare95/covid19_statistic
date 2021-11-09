import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.covid19api.com/summary',
})

export const CountriesAPI = {
    getCountriesData() {
       return instance.get(`https://api.covid19api.com/summary`)
            .then(response => {return response.data})
    }
}

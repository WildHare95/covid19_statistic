import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.covid19api.com/summary',
})

export const CountriesAPI = {
    async getCountriesData() {
        const res = await instance.get(`https://api.covid19api.com/summary`)
        return res.data
    }
}

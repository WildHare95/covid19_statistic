import {CountriesAPI} from "../Components/api/api";

const DATA_STATISTICS = "DATA_STATISTICS";
const FILTERED_DATA = "FILTERED_DATA";

let initialState = {
    data: [],
    filteredData: [],
    isLoaded: false
}

const dataState = (state = initialState, action) => {
    switch (action.type) {
        case DATA_STATISTICS:
            return {
                ...state,
                data: action.data,
                isLoaded: true
            }
        case FILTERED_DATA:
            return {
                ...state,
                filteredData: action.data,
            }

        default:
            return state
    }
}

const setDataStatistics = (data) => ({type: DATA_STATISTICS, data})
const setFilteredDataMount = (data) => ({type: FILTERED_DATA, data})


export const getCountriesStatistics = () => (dispatch) => {
    CountriesAPI.getCountriesData()
        .then(data => dispatch(setDataStatistics(data.Countries)))
}

export const setFilteredData = (data) => (dispatch) => {
    const filteredData = []
    data.map((item) => filteredData.push({
        Country: item.Country,
        TotalConfirmed: item.TotalConfirmed,
        TotalDeaths: item.TotalDeaths,
        TotalRecovered: item.TotalRecovered
    }))
    dispatch(setFilteredDataMount(filteredData))
}


export default dataState
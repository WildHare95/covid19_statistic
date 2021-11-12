import {CountriesAPI} from "../api/api";

const SET_DATA_STATISTICS = "DATA_STATISTICS";
const SET_FILTERED_DATA = "FILTERED_DATA";

/*Declaring a general data structure with default values*/
let initialState = {
    data: [],
    filteredData: [],
    isLoaded: false
}

const dataState = (state = initialState, action) => {
    /*Changes to data in the general data structure depending on the type*/
    switch (action.type) {
        case SET_DATA_STATISTICS:
            return {
                ...state,
                data: action.data,
                isLoaded: true
            }
        case SET_FILTERED_DATA:
            return {
                ...state,
                filteredData: action.data,
            }

        default:
            return state
    }
}

const setDataStatistics = (data) => ({type: SET_DATA_STATISTICS, data})
const setFilteredDataMount = (data) => ({type: SET_FILTERED_DATA, data})


export const getCountriesStatistics = () => (dispatch) => {
    /*Request to the server*/
    CountriesAPI.getCountriesData()
        /*Adding array to the general data structure*/
        .then(data => dispatch(setDataStatistics(data.Countries)))
}

export const setFilteredData = (data) => (dispatch) => {
    /*Creating a filtered array with a structure:
    filteredData = [
        {
            Country: "The name of the country",
            TotalConfirmed: "Total number of confirmations",
            TotalDeaths: "Total number of deaths",
            TotalRecovered: "Total number of recovered",
        }

    ]*/
    const filteredData = []
    data.map((item) => filteredData.push({
        Country: item.Country,
        TotalConfirmed: item.TotalConfirmed,
        TotalDeaths: item.TotalDeaths,
        TotalRecovered: item.TotalRecovered
    }))
    /*Adding a filtered array to the general data structure*/
    dispatch(setFilteredDataMount(filteredData))
}


export default dataState
import {compose} from "redux";
import {connect} from "react-redux";
import DataTable from "./DataTable";
import {getCountriesStatistics} from "../../redux/data-reducer";

const mapStateToProps = (state) => {
    return{
        data: state.dataState.filteredData,
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            getCountriesStatistics
        }
    )
)(DataTable)

import {compose} from "redux";
import {connect} from "react-redux";
import SearcherEngine from "./SearcherEngine";
import {setFilteredData} from "../../redux/data-reducer";

const mapStateToProps = (state) => {
    return{
        country: state.dataState.data,
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            setFilteredData
        }
    )
)(SearcherEngine)

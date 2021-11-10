import "./SearcherEngine.module.css"

const Searcher = ({setTempSearch}) => {

    return (
        <div>
            <form>
                <input type="text" placeholder={"Search..."}
                       onChange={(e) => {setTempSearch(e.currentTarget.value)}}/>
            </form>
        </div>
    )
}

export default Searcher

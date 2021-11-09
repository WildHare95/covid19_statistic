import styles from "./App.module.css"
import DataTableContainer from "./Components/DataTable/DataTableContainer";
import Header from "./Components/Header/Header";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <DataTableContainer/>
        </div>
    );
}

export default App;

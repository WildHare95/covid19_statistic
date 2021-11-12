import styles from "./App.module.css"
import DataTableContainer from "./components/DataTable/DataTableContainer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <DataTableContainer/>
        </div>
    );
}

export default App;

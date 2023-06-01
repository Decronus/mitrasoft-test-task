import "./App.css";
import Header from "./components/header/Header";
import { AppRoutes } from "./router/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Header />

            <div className="content">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;

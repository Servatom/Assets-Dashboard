import Dashboard from "./components/Dashboard/Dashboard";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Page from "./components/Pages/Page";

function App() {
    return (
        <Router>
            <Switch>
                <Route strict path="/*">
                    <Page/>
                </Route>
            </Switch>
        </Router>
    );
    }

    export default App;
    

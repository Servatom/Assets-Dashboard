import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Dashboard/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
    }

    export default App;
    

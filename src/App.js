import logo from './logo.svg';
import './App.css';
import HOME from './component/HOME/HOME';
import NOTMATCH from './component/NOTMATCH/NOTMATCH';
import COUNTRYDATEILS from './component/CountryDetails/COUNTRYDATEILS';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <HOME></HOME>
          </Route>
          <Route exact path="/">
            <HOME></HOME>
          </Route>
          <Route path="/country/:name">
             <COUNTRYDATEILS></COUNTRYDATEILS>
          </Route>
          <Route path="*">
             <NOTMATCH></NOTMATCH>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import "./styles/Global.scss";

function App() {

  return (
    <Router>
      <Route exact path="/">
       <Home/>
      </Route>
    </Router>
  );
}

export default App;

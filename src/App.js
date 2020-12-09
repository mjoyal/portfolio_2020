import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';

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

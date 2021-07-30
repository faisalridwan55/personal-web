import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home';
import About from './containers/About';
import Header from './containers/Header';
import Contact from './containers/Contact';
import SkillAndPortofolios from './containers/S&P';
import NotPageFound from './containers/NotPageFound';

function App() {
  console.log(window.location.pathname);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skill">
              <SkillAndPortofolios />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotPageFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

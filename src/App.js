import styled from 'styled-components';
import { VContainer } from './components/Grid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home';
import About from './containers/About';
import Header from './containers/Header';
import Contact from './containers/Contact';
import SkillAndPortofolios from './containers/S&P';
import NotPageFound from './containers/NotPageFound';

import { WHITE } from './constants/Colors';

const AppContainer = styled(VContainer)`
  min-height: 100vh;
  align-items: center;
  background-color: ${WHITE};
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <div className="content-container">
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
    </AppContainer>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home';
import About from './containers/About';
import Header from './containers/Header';
import Contact from './containers/Contact';
import SkillAndPortofolios from './containers/S&P';
import NotPageFound from './containers/NotPageFound';
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header
          showSidebar={isSidebar}
          handleNavButtonClicked={() => setIsSidebar(!isSidebar)}
        />
        <Sidebar 
          showSidebar={isSidebar} 
          handleNavButtonClicked={() => setIsSidebar(!isSidebar)}
        />
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

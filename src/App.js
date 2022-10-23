import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./containers/Header";
import Contact from "./containers/Contact";
import SkillAndPortofolios from "./containers/S&P";
import NotPageFound from "./containers/NotPageFound";

import Sidebar from "./components/Sidebar";
import { BLACK } from "./constants/Colors";
import { Box } from "./components/Grid";

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
        <Box
          className="content"
          alignItems="center"
          style={{ background: BLACK }}
        >
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
        </Box>
      </Router>
    </div>
  );
}

export default App;

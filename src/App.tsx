import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppWrapper } from "./styled";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <SignInPage />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;

import React from "react";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { IntlProvider } from "react-intl";

import messages from "messagebundle";
import Layout from "layouts/Admin";

const hist = createBrowserHistory();

const AppContainer = props => {
  const selectedLocale = props.app.locale;
  console.log(selectedLocale)
  return (
    <IntlProvider locale={selectedLocale} messages={messages[selectedLocale]}>
      <Router history={hist}>
        <Switch>
          <Route path="/" render={props => <Layout {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AppContainer);

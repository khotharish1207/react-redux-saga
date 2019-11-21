import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setLocale } from "redux/actions/actions";
import logo from "../../logo.svg";
import "./App.css";

const App = ({ setLocale }) => {

  const onChange = e => setLocale(e.target.value);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Select Language </span>
        <select onChange={onChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
        <FormattedMessage id="greet" defaultMessage={`Welcome`} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setLocale }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

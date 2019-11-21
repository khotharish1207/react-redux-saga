import React from "react";
import PerfectScrollbar from "perfect-scrollbar";

import { Route, Switch, Redirect } from "react-router-dom";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import Footer from "components/Footer/Footer.jsx";
// import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" ref={this.mainPanel}>
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;

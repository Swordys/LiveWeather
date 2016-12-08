import React from "react";
import ReactDOM from "react-dom";
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
import App from "./App";
import Weather from "./Weather";
import About from "./About";
import Examples from "./Examples";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById("root")
);
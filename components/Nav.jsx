import React from "react";
var {Link, IndexLink} = require("react-router");

class Navigate extends React.Component {
    render() {
        return (
            <div className="nav-main">
                <div className="logo">
                    <span>WT</span>
                </div>
                <ul className="content">
                    <li><IndexLink to="/" className="lnk" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Weather</IndexLink></li>
                    <li><Link to="/about" className="lnk" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>About</Link></li>
                    <li><Link to="/examples" className="lnk" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Examples</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigate;
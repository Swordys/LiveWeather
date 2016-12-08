import React from "react";
import Navigate from "./Nav";

class App extends React.Component {
    render() {

        return (
            <div className="main-wrap">
                <Navigate/>
                {this.props.children}
            </div>
        )
    }
}

export default App;
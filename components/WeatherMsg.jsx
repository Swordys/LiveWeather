import React from "react";

class WeatherMsg extends React.Component {

    render() {
        var {tempo, loc} = this.props;
        function colorCode() {
            if (tempo <= 0) {
                return <span style={{ color: "mediumblue" }}>{tempo}°C</span>
            } else if (tempo > 0 && tempo < 10) {
                return <span style={{ color: "cornflowerblue" }}>{tempo}°C</span>
            } else if (tempo > 10 && tempo < 30) {
                return <span style={{ color: "orange" }}>{tempo}°C</span>
            } else if (tempo > 30) {
                return <span style={{ color: "red" }}>{tempo}°C</span>
            }
        }
        return (
            <div>
                <h2>{colorCode()} in {loc}</h2>
            </div>
        )
    }
}

export default WeatherMsg;
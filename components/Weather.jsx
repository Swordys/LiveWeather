import React from "react";
import GetWeather from "./GetWeather";
import WeatherMsg from "./WeatherMsg";
import WeatherMap from "../api/WeatherMap";

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            bkUrl: ""
        }
    }

    handleSearch(data) {
        var that = this;
        this.setState({
            isLoading: true
        });

        

        WeatherMap.getTemp(data).then((temp) => {
            that.setState({
                location: temp[1],
                temp: temp[0],
                isLoading: false
            });
        });
    }

    render() {

        var {temp, location, isLoading, bkUrl} = this.state;

        function rendermessage() {
            if (isLoading) {
                return <h2>Getting data..</h2>;
            } else if (temp && location) {
                return <WeatherMsg tempo={temp} loc={location} />;
            }
        }

        return (
            <div className="weather-wrap" >
                <h2>Type location</h2>
                <GetWeather onSearch={this.handleSearch.bind(this)} />
                {rendermessage()}
            </div>
        )
    }
}

export default Weather;
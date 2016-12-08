import React from "react";

class GetWeather extends React.Component {
    onWeatherSubmit(e) {
        e.preventDefault();
        let data = this.refs.location.value;
        if (data.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(data);
        }
    }

    render() {
        return (
            <div className="submit-wrap">
                <form onSubmit={this.onWeatherSubmit.bind(this)}>
                    <input placeholder="some city" className="main-inp" type="text" ref="location" />
                </form>
            </div>
        )
    }
}

export default GetWeather;
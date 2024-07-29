import React from "react";
import SiteCarousel from "./SiteCarousel.jsx";
import VehicleBrowser from "./VehicleBrowser.jsx";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SiteCarousel vehicleData={this.props.vehicleData} />
                <VehicleBrowser vehicleData={this.props.vehicleData} />
            </div>
        )
    }
}

export default Home;
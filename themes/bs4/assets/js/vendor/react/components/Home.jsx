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
                <p>Test</p>
                <SiteCarousel />
                <VehicleBrowser />
            </div>
        )
    }
}

export default Home;
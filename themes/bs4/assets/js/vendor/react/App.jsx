import React from "react";
import axios from "axios";
import TopNav from "./components/TopNav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        vehicles: [],
      },
    };
  }

  componentDidMount() {
    axios
      .get("/db.json")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.data) {
      return (
        <Router>
          <div className="">
            <TopNav />
            <div className="contentAread">
              <Route exact path="/" component={Home} />
            </div>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return <h4>Loading Data...</h4>;
    }
  }
}

export default App;

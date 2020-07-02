import React, { Component } from "react";
import "./App.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Set from "./components/Set";
import FrontPage from "./components/FrontPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      setData: data,
      showSetList: false,
      currentSet: [],
      currentSetName: "",
    };
  }

  showSetListHandler = () => {
    const doesShow = this.state.showSetList;
    this.setState({ showSetList: !doesShow });
  };

  setCurrentSet = (clickedSet) => {
    const { set, items } = clickedSet;
    this.setState({
      currentSet: items,
      currentSetName: set,
    });
  };

  render() {
    let setList = null;
    if (this.state.showSetList) {
      setList = (
        <div>
          {this.state.setData.map((set) => {
            return (
              <div style={{ padding: "10px" }}>
                <Button
                  onClick={() => this.setCurrentSet(set)}
                  variant="secondary"
                  size="lg"
                  block
                >
                  {set.set}
                </Button>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div>
                <Button onClick={this.showSetListHandler} size="sm">
                  Show Set List
                </Button>
                {setList}
              </div>
            </div>

            <div className="col-sm-10">
              {this.state.showSetList === false ? (
                <div>
                  <FrontPage />
                </div>
              ) : (
                <div>
                  <h3>{this.state.currentSetName}</h3>
                  <Set currentSet={this.state.currentSet} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* container end */}
      </div>
    );
  }
}

export default App;

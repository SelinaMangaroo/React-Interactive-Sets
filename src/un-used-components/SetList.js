import React, { Component } from "react";
import Set from "../components/Set";
import Button from "react-bootstrap/Button";

class SetList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <Button variant="secondary" size="lg" block>
          {this.props.setName}
        </Button>
      </div>
    );
  }
}

export default SetList;

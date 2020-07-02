import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import "../App.css";

class Set extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
            {this.props.currentSet.map((item) => {
              return (
                <div className="col mb-4">
                  <div className="card-container">
                    <Card>
                      <div
                        className="img"
                        dangerouslySetInnerHTML={{ __html: item.media_tag }}
                      />
                      <Card.Body>
                        <Card.Text>
                          <div
                            className="caption"
                            dangerouslySetInnerHTML={{ __html: item.caption }}
                          />
                        </Card.Text>
                        <Button variant="outline-primary" size="sm">
                          <a className="url" href={item.url} rel="noopener">
                            URL
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Set;

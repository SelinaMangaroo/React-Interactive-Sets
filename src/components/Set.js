import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Button from "react-bootstrap/Button";

import "../App.css";

class Set extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("data in set: " + this.props.currentSet);
    return (
      <div>
        <Grid container spacing={2}>
          {this.props.currentSet.map((item) => {
            return (
              <Grid item xs={4}>
                <div className="card-container">
                  <Card variant="outlined">
                    <CardMedia>
                      <div
                        className="image"
                        dangerouslySetInnerHTML={{
                          __html: item.media_tag,
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        align="left"
                        display="inline"
                        variant="caption"
                      >
                        <div
                          className="caption"
                          dangerouslySetInnerHTML={{
                            __html: item.caption,
                          }}
                        />
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                      <Button variant="outline-primary" size="sm">
                        <a className="url" href={item.url} rel="noopener">
                          URL
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Set;

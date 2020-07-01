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

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="card-container">
              <Card variant="outlined">
                <CardMedia>
                  <div
                    className="image"
                    dangerouslySetInnerHTML={{
                      __html: this.props.item.media_tag,
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography align="left" display="inline" variant="caption">
                    <div
                      className="caption"
                      dangerouslySetInnerHTML={{
                        __html: this.props.item.caption,
                      }}
                    />
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button variant="outline-primary" size="sm">
                    <a
                      className="url"
                      href={this.props.item.url}
                      rel="noopener"
                    >
                      URL
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Item;

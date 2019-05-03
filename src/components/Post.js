import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import image from "../static/homepage.jpg";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container className="div-title-me" direction="row">
        <Grid
          item
          className="center-img"
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ padding: "1em" }}
        >
          <img src={image} alt="alex cotin" className="responsive-blog " />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          className="center-text-me"
        >
          <Grid container direction="column">
            <Typography
              style={{ color: "white", fontWeight: 300 }}
              variant="h2"
              gutterBottom
            >
              First Post
            </Typography>
            <Typography
              style={{
                color: "white",
                fontWeight: 300
              }}
              gutterBottom
            >
              Hello to everyone! This is my first post on my site. Hope you will
              find it interesting and funny!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Blog;

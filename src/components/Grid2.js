import React from "react";
import firebase from "../db/Firebase";
import { Grid } from "@material-ui/core";

class GridPort2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const imgRef = firebase.database().ref("imgs");
    imgRef.on("value", snapshot => {
      let imgs = snapshot.val();
      let newState = [];
      for (let img in imgs) {
        newState.push({
          id: imgs[img].id,
          url: imgs[img].url,
          category: imgs[img].category,
          description: imgs[img].description,
          title: imgs[img].title
        });
      }
      this.setState({
        images: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Grid container direction="row">
          {this.state.images.map(img => (
            <Grid
              item
              key={img.id}
              xl={4}
              lg={4}
              sm={6}
              xs={12}
              style={{ padding: ".3rem" }}
            >
              <img src={img.url} alt={img.description} className="responsive" />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default GridPort2;

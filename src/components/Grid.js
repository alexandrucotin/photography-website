import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import firebase from "../db/Firebase";

class GridPort extends React.Component {
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
        <GridList cellHeight={400}>
          {this.state.images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.url} alt={img.description} />
              <GridListTileBar
                title={img.title}
                subtitle={<span>by: Alex Cotin</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon style={{ color: "white" }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridPort;

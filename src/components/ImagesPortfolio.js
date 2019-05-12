import React from "react";
import firebase from "../db/Firebase";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import SocialBar from "./SocialBar";

class ImagesPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isVisible: true
    };
    this.closeComponent = ev => {
      ev.preventDefault();

      this.setState({
        isVisible: false
      });

      setTimeout(() => {
        this.props.history.push("/");
      }, 600);
    };
  }

  componentDidMount() {
    const imgRef = firebase.database().ref("imgs");
    const { category } = this.props.location.state;
    imgRef.on("value", snapshot => {
      let imgs = snapshot.val();
      let newState = [];
      for (let img in imgs) {
        if (imgs[img].category === category) {
          newState.push({
            id: imgs[img].id,
            url: imgs[img].url,
            category: imgs[img].category,
            description: imgs[img].description,
            title: imgs[img].title
          });
        }
      }
      this.setState({
        images: newState
      });
    });
  }

  render() {
    const { category } = this.props.location.state;
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          this.props.match.params === "/login"
            ? "loadComponent"
            : "leaveComponent"
        }
      >
        {this.state.isVisible ? (
          <div className={category}>
            <SocialBar />
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
                  <img
                    src={img.url}
                    alt={img.description}
                    className="responsive"
                  />
                </Grid>
              ))}
            </Grid>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ImagesPortfolio;

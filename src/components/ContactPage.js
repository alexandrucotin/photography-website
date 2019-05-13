import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import SocialBar from "./SocialBar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      isLoding: true
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
    this.setState({ isLoding: false });
  }
  render() {
    const { loading } = this.state.isLoding;

    if (loading) {
      return null;
    }
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
          <div className="home">
            <SocialBar />

            <div className="div-title-home">
              <Grid container direction="column">
                <div>
                  <Grid container alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="With a grid"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </div>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;

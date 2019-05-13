import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import SocialBar from "./SocialBar";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
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
          <div className="contact-me">
            <SocialBar />

            <div className="div-title-contact">
              <Grid container direction="column">
                <FormControl className="little-form">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Name
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className="little-form">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className="little-form">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Message
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
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

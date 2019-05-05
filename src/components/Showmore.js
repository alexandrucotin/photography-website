import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhotoIcon from "@material-ui/icons/Photo";
import { Link } from "react-router-dom";

class Showmore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      category: this.props.category
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state.value;
    const { category } = this.state.category;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style={{ width: 500 }}
      >
        <BottomNavigationAction
          component={Link}
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/grid`,
            state: {
              category: { category }
            }
          }}
          label="View Photos"
          icon={<PhotoIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default Showmore;

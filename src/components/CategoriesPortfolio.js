import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import firebase from "../db/Firebase";
import PhotoIcon from "@material-ui/icons/Photo";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

class CategoriesPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    const categoryRef = firebase.database().ref("categories");
    categoryRef.on("value", snapshot => {
      let categories = snapshot.val();
      let newState = [];
      for (let category in categories) {
        newState.push({
          title: categories[category].title,
          url: categories[category].img,
          description: categories[category].description,
          id: categories[category].id,
          category: categories[category].category
        });
      }
      this.setState({
        categories: newState
      });
    });
  }

  render() {
    return (
      <Grid container justify="center">
        {this.state.categories.map(category => (
          <Grid
            item
            lg={6}
            className="center-card-portfolio"
            style={{ padding: "1em" }}
            key={category.id}
          >
            <Card style={{ maxWidth: "30em" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Verona Landscapes"
                  style={{ objectFit: "cover" }}
                  height="auto"
                  image={category.url}
                  title={category.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.title.toString()}
                  </Typography>
                  <Typography component="p">
                    {category.description.toString()}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <BottomNavigation showLabels style={{ width: 500 }}>
                  <BottomNavigationAction
                    component={Link}
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/portfolio/" + category.category,
                      state: {
                        category: category.category
                      }
                    }}
                    label="View Photos"
                    icon={<PhotoIcon />}
                  />
                </BottomNavigation>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CategoriesPortfolio;

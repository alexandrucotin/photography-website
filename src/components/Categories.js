import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import firebase from "../db/Firebase";
import Showmore from "./Showmore";

class Category extends React.Component {
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
          id: categories[category].id
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
                <Showmore />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Category;

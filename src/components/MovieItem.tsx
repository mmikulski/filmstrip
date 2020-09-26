import React from "react";
import countdown from "../countdown.svg"
import {MovieResult} from "./MoviesList";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: '20px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
  media: {
    width: 151,
  },
});

export function MovieItem({movie}: { movie: MovieResult }) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title} ({movie.Year})
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.Type}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={movie.Poster}
          title={movie.Title}
        />
      </Card>
  );
}

export function MovieItemPlaceholder() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          Loading...
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={countdown}
        title="Countdown"
      />
    </Card>
  )
}

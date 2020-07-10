import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginTop: 30,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,

  },

});


export default function SimpleCard(props) {
  const classes = useStyles();

 

  return (
    <Card className={classes.root}>
      <CardContent>
      {<CardMedia
          className={classes.media}
          image={props.value.countryInfo.flag}
          title="Contemplative Reptile"
        />}

        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.value.country}
        </Typography>
        <Typography variant="h5" component="h2">
         Total Cases: {props.value.cases}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Active: {props.value.active}
        </Typography>
        <Typography variant="body2" component="p">
        Recovered: {props.value.recovered}
          <br />
         Deaths: {props.value.deaths}
        </Typography>
      </CardContent>
  
    </Card>
  );
}

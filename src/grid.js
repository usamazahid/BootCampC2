import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ApiCall from './apicall';
import current from './img/currentCases.jpg'
import recovered from './img/recovered.jpg'
import deaths from './img/death.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:30,
    maxWidth:900,
    margin:"0 auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  current:{
    backgroundImage: `url(${current})`,
    color:"white",
    textAlign:"center",
  },

  recovered:{
    backgroundImage: `url(${recovered})`,
    color:"white",
    textAlign:"center",
  },

  deaths:{
    backgroundImage: `url(${deaths})`,
    color:"white",
    textAlign:"center",
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  let [covidData, setCovidData] = useState([]);

  useEffect(()=>{
    async function CovidData(){
        let CovidFetch = await fetch("https://api.thevirustracker.com/free-api?global=stats");
        let Results = await CovidFetch.json();
        setCovidData(Results.results[0]);
    }
    CovidData();
}, []);



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paper, classes.current} elevation={3}>
          <Typography  gutterBottom>
          Total Active Cases
        </Typography>
            {covidData.total_active_cases}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper, classes.recovered} elevation={3}>
          <Typography  gutterBottom>
          Total Recovered Cases
        </Typography>
        {covidData.total_recovered}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper, classes.deaths} elevation={3}>
          <Typography  gutterBottom>
          Total Deaths
        </Typography>
        {covidData.total_deaths}</Paper>
        </Grid>
       
      </Grid>
    
    </div>
  );
}

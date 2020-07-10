import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import current from './img/currentCases.jpg'
import recovered from './img/recovered.jpg'
import deaths from './img/death.jpg'
import {Doughnut} from 'react-chartjs-2';
import ComboBox from './combobox'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:30,
    maxWidth:900,
    margin:"0 auto"
  },

  current:{
    padding: theme.spacing(2),
    backgroundImage: `url(${current})`,
    color:"white",
    textAlign:"center"
  },
 
  recovered:{
    padding: theme.spacing(2),
    backgroundImage: `url(${recovered})`,
    color:"white",
    textAlign:"center"
  },

  deaths:{
    padding: theme.spacing(2),
    backgroundImage: `url(${deaths})`,
    color:"white",
    textAlign:"center"
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


const data = {
  labels: [
  'Active',
  'Recovered',
  'Deaths'
],

datasets: [{
  data: [covidData.total_active_cases, covidData.total_recovered, covidData.total_deaths],
  backgroundColor: [
  '#36A2EB',
  '#FFCE56',
  '#FF6384',
  ],
  hoverBackgroundColor: [
  '#36A2EB',
  '#FFCE56',
  '#FF6384',
  ]
}]
};

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.current} elevation={3}>
          <Typography  gutterBottom>
          Total Active Cases
        </Typography>
            {covidData.total_active_cases}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.recovered} elevation={3}>
          <Typography  gutterBottom>
          Total Recovered Cases
        </Typography>
        {covidData.total_recovered}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.deaths} elevation={3}>
          <Typography  gutterBottom>
          Total Deaths
        </Typography>
        {covidData.total_deaths}</Paper>
        </Grid>
       
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} >
        <h2>Cases all around world.</h2>
        <Doughnut data={data} />
        </Grid>
        <Grid item xs={12} sm={4} >
        <ComboBox />
        </Grid>
      </Grid> 
    </div>
  );
}

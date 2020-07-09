/* eslint-disable no-use-before-define */
import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const options = ['Option 1', 'Option 2'];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:30,
    maxWidth:900,
    margin:"0 auto"
  },
}));



export default function ComboBox() {
    
  let [countryData, setCountryData] = useState([]);
  const [value, setValue] = React.useState(options[0]);

  useEffect(()=>{
    async function getCountry(){
      let fecthCountry = await fetch("https://corona.lmao.ninja/v2/countries");
      let Data = await fecthCountry.json();
      setCountryData(Data);
    }
    getCountry();
  }, []);




const classes = useStyles();
console.log(value);

  return (
      <div className={classes.root}>
    <Autocomplete
      id="combo-box-demo"
      options={countryData}
      getOptionLabel={(option) => option.country}
      style={{ width: 300 }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Select Country" variant="outlined" />}
    />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  
];

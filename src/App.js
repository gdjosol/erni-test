import { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import logo from './logo.svg';
import './App.css';

function App() {

  const [entrances, setEntrances] = useState(3);

  const [smallParking, setSmallParking] = useState(0);
  const [mediumParking, setMediumParking] = useState(0);
  const [largeParking, setLargeParking] = useState(0);

  const [flatRate, setFlatRate] = useState(40);
  const [flatRateHour, setFlatRateHour] = useState(3);

  const [dayRate, setDayRate] = useState(5000);
  const [dayHours, setDayHours] = useState(24);

  const [smallParkingFee, setSmallParkingFee] = useState(20);
  const [mediumParkingFee, setMediumParkingFee] = useState(60);
  const [largeParkingFee, setLargeParkingFee] = useState(100);

  const [parkedCars, setParkedCars] = useState([]);

  useEffect(() => {
    
  });


  return (
    <div className="App">
      <Grid container className="main-content">
        <Grid item md={2} >
          <Paper className="testg">
            hello world
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

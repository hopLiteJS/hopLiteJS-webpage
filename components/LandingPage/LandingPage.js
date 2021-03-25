import React from 'react';
import NavBar from '../NavBar';
import ContactUs from './ContactUs';
import GetStarted from './GetStarted';
import ExampleCode from './ExampleCode';
import WhyHoplite from './WhyHopLite';
import Footer from '../Footer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  top: {
    display: 'flex',
    backgroundColor: '#124653',  
  }

}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className= {classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NavBar/>
        </Grid>
        {/* <div className= {classes.top}> */}
        <Grid item xs={12}>
          <h1 id='welcome' style={{textAlign: 'center'}}>Welcome to hopLiteJS!</h1>
        </Grid>
        
        <Grid item xs={5}>
          <img src='/HOPLITE.png' alt='large hoplite logo' width={500} height={500}/> 
        </Grid>

        <Grid item xs={7}>
          <WhyHoplite />
        </Grid>
        {/* </div> */}
      
        <Grid item xs={6}>
          <GetStarted />
        </Grid>

        <Grid item xs={6}>
          <ExampleCode />
        </Grid>

        {/* <Grid item xs={12}>
          <ContactUs />
        </Grid> */}

        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}
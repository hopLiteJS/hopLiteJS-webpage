import React from 'react';
// import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#124653',
    margin: '50px',
    marginBottom: '25px',
    
  },

}));



export default function WhyHopLite() {
  const classes = useStyles();

  return (
    <div className = {classes.root}>
      <h2 >The Philosophy</h2>
      <p>
      hopLiteJS was created in 2021 with the vision to be a developer friendly lightweight middleware library for Node.js. hopLiteJS can be imported and used in any Express-based web application. It has multiple developer interfaces for customizing authentication and authorization. With hopLiteJS, developers no longer have to dread authentication, authorization and hashing.
In ancient history, the hoplites were some of the fiercest warriors that the world had ever seen. They proved their impeccable reputation by fighting in the harshest of battles, even when they were greatly outnumbered. At the heart of their fortitude was their mission to protect what they deemed to be important. Today as developers, we often find ourselves also outnumbered in a battle for cybersecurity with online hackers. As such, we at hopeLiteJS find our mission to protect our users, as their security is what is important to us.      </p>
      {/* <img src='./hopLiteLogo.png' alt='large hoplite logo'/>  */}
    </div>
  );
}
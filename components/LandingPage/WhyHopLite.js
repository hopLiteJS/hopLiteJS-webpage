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
      <h2 >Our Philosophy</h2>
      <p>
        hopLiteJS was created as a way to abstract authentication and authorization for developers who need to implement these functionalities. The purpose of this library is to create a security suite that will give developers the ability to hash, authenticate, and authorize users to protect routes. Since authentication and authorization can be time consuming and complex, hopLiteJS aims to solve this problem by providing developers a user-friendly library.
      </p>
      {/* <img src='./hopLiteLogo.png' alt='large hoplite logo'/>  */}
    </div>
  );
}
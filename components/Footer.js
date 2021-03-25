import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn} from '@material-ui/icons';
import { AppBar, Toolbar, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#FFFFFF',
  },
  // // menuButton: {
  // //   marginRight: theme.spacing(2),
  // // },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },

  title: {
    flexGrow: 1,
  },
  
  // // buttonClass: {
  // //   backgroundColor: "orange"
  // // },
  color: {
    backgroundColor: '#5FFBF1',

  }

 
}));



export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.root} position={classes.stickToBottom} color={classes.color} title={<img src="hopeliteLogoVs2.png" alt='logoSmall'/>}>
        <Toolbar id= 'footer' style={{backgroundColor: '#2a9d8f'}}>
          <img id ='logoSmall' src="hopeliteLogoVs2.png" alt='hopliteLogo'/>
          {/* <Typography variant="body1" color="inherit"> */}
          <Typography variant="h6" className={classes.title}>
            <p>Created And Designed By: Reuben Kirsh & Maxwell Reed & Ted Min & Karin Illesova</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <GitHub color='#124653'/>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <LinkedIn color='#124653'/>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>Terms</p>
          </Typography>

          {/* </Typography> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
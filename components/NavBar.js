import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { fade } from '@material-ui/core/styles/colorManipulator';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  
  color: {
    backgroundColor: fade('#124653', 0.5),

  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (

    <div className="NavBar">
      <AppBar position="static" className={classes.color}>
        <Toolbar id='navigationBar' >

          <Typography variant="h5" className={classes.title}>
            <Link href="/" passHref>HopliteJS</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/posts/About" passHref>About</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link href="/posts/Documentation" passHref>Documentation</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link href="/posts/More-Info" passHref>More-Info</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link href="/posts/Team-Members" passHref>Team-Members</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link href="/posts/BlogPosts" passHref>Blog Posts</Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}


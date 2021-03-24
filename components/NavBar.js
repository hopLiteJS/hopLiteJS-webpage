import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonClass: {
    backgroundColor: "orange"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="NavBar">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
           
            <Link href="/" passHref><Button className={classes.buttonClass}>HopliteJS</Button></Link>
          </Typography>
          {/* <Grid container> */}

        <Link href="/posts/About" passHref><Button className={classes.buttonClass}>About</Button></Link>
        <Link href="/posts/Documentation" passHref><Button className={classes.buttonClass}>Documentation</Button></Link>
        <Link href="/posts/More-Info" passHref><Button className={classes.buttonClass}>More-Info</Button></Link>
        <Link href="/posts/Team-Members" passHref><Button className={classes.buttonClass}>Team-Members</Button></Link>
        <Link href="/posts/BlogPosts" passHref><Button className={classes.buttonClass}>Blog Posts</Button></Link>
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}


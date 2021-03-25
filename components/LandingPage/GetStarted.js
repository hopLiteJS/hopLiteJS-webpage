import React from 'react';
// import { Box,Paper }  from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GetStarted() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className = "GetStarted">

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {bull}Get Started{bull}
          </Typography>
          (<p>
              1. Import DefaultHopLite using the following code<br />
              2. Import Authenticate and Authorize<br />
              3. Import HopLiteSchemas<br />
              4. Import Rulesets<br />
            <br />
              const {'{'} DefaultHoplite {'}'}  = require(‘hoplitejs’);<br />
              const {'{'}authenticate, authorize{'}'} = DefaultHoplite;<br />
              const {'{'} HopliteSchemas{'}'}= require(‘hoplitejs’);<br />
              const {'{'}createUser, createRulesetCookie, createRuleset,createRulesetCookieJWT{'}'} = HopliteSchemas;<br />
              const {'{'}pwArgon2, hashed, compareArgon2, compared{'}'}= HashMethods;<br />
              ...
          </p>)

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
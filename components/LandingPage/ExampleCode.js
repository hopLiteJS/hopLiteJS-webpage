import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles= makeStyles(({
  root: {
    margin: '50px',
    minWidth: 275
 },

}
));


export default function ExampleCode() {
  const classes = useStyles();
  
  return (
    <div className = {classes.root} >
      <img src="/exampleCode.png" alt="Code" width={400} height={400}/>
    </div>
  );
}
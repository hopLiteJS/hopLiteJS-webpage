import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles= makeStyles(({
  root: {
    margin: '25px',
    minWidth: 275
 },

}
));


export default function ExampleCode() {
  const classes = useStyles();
  
  return (
    <div className = {classes.root} >
      <h2>Code Example</h2> 
      <img src="/exampleCode.png" alt="Code" width={500} height={500}/>
    </div>
  );
}
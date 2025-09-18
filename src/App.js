
import * as React from 'react';
import {Rating, Switch, Button, CircularProgress} from '@mui/material';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Rating name="size-large" defaultValue={2} size="large" />
      <Switch {...label} defaultChecked />
      <Button variant="contained">Contained</Button>
      <CircularProgress color="success" />
      
    </div>
  );
}

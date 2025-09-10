
import * as React from 'react';
import {Switch, Button, CircularProgress} from '@mui/material';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      
      <Switch {...label} defaultChecked />
      <Button variant="contained">Contained</Button>
      <CircularProgress color="success" />

    </div>
  );
}

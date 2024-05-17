import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import "flag-icons/css/flag-icons.min.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form validation example
          </Typography>
          <IconButton>
            <Icon className="fi fi-gb"></Icon>
          </IconButton>
          <IconButton >
            <Icon className="fi fi-kz" style={{ fontSize: 26 }}></Icon>
          </IconButton>
          <IconButton>
            <Icon className="fi fi-cn"></Icon>
          </IconButton>
          <IconButton>
            <Icon className="fi fi-ru"></Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

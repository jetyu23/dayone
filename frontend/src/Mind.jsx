import * as React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/base';
import { Card, Typography } from '@mui/material';
import { Box, Menu, MenuItem } from '@mui/material';
import './Home.css';

function Mind() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="app-container">
      <Card elevation={0} sx={{ backgroundColor: '#A014D1', color: '#FBEFFF' }}>
        <div className="header">
          <div className="left-section">
            <Typography variant="h5">
              <b>OneDay</b>
            </Typography>
          </div>
          <Box className="right-section" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
            <Link to="/" className="btn-neutral">Home</Link>
            <Button className="btn-neutral" aria-controls="stats-menu" aria-haspopup="true" onClick={handleClick}>
              Stats
            </Button>
            <Menu
              id="stats-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/mind" style={{ textDecoration: 'none', color: 'inherit' }}>Mind</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/goals" style={{ textDecoration: 'none', color: 'inherit' }}>Goals</Link></MenuItem>
            </Menu>
            <Button className="btn-light">Log In</Button>
          </Box>
        </div>
      </Card>
      <div className="container">
        <div className="mind-content">
          <div className="quadrant">
            <h3>Mindfulness Metric</h3>
            <p>See your mindfulness through a graph.</p>
          </div>
          <div className="quadrant">
            <h3>Mindfulness Categories</h3>
            <p>See your top mindfulness categories.</p>
          </div>
          <div className="double-quadrant">
            <h3>Mindfulness Aspects</h3>
            <p>See your aspects.</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Mind;

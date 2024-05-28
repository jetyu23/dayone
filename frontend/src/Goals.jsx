import * as React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/base';
import { Card, Typography } from '@mui/material';
import { Box, Menu, MenuItem } from '@mui/material';
import './Goals.css';

function Goals() {
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
        <div className="header" style={{ color: '#fff' }}>
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
        <div className="goals-content">
          <div className="quadrant">
            <h3>Short-term goals</h3>
            <p>Check your progress.</p>
          </div>
          <div className="quadrant">
            <h3>Long-term goals</h3>
            <p>Check your progress.</p>
          </div>
          <div className="double-quadrant">
            <h3>Goal motivation aspects</h3>
            <p>See if you have will to live.</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Goals;

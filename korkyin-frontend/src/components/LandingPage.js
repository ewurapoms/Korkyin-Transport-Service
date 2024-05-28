import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h1">Welcome to Korkyin</Typography>
      <Button variant="contained" color="primary" component={Link} to="/signup/user">
        Sign Up as Rider
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/signup/employer">
        Sign Up as Employer
      </Button>
    </Container>
  );
};

export default LandingPage;

// web/src/components/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, Container, Fade, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle, Security, Update } from '@mui/icons-material';

const LandingPage = ({ userName, certificates }) => {
  const [loading, setLoading] = useState(true);
  const [displayedCertificates, setDisplayedCertificates] = useState([]);

  useEffect(() => {
    // Simulate fetching certificates with a delay
    const fetchCertificates = () => {
      // If certificates are passed as props, use them directly
      if (certificates && certificates.length > 0) {
        setDisplayedCertificates(certificates);
      } else {
        // Simulate an API call or fetching logic
        setTimeout(() => {
          // Example: Simulated fetched data
          const fetchedCertificates = [
            { title: 'Certificate 1', description: 'Description for Certificate 1' },
            { title: 'Certificate 2', description: 'Description for Certificate 2' },
          ];
          setDisplayedCertificates(fetchedCertificates);
        }, 1000); // Simulate a 1-second fetch delay
      }
      setLoading(false);
    };

    fetchCertificates();
  }, [certificates]);

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.8)', color: 'white', p: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to the Online Certificate Management System
        </Typography>
        <Typography variant="h5" gutterBottom>
          {userName ? `Hello, ${userName}!` : 'Streamline your academic certificate management with ease.'}
        </Typography>
        <Button variant="contained" color="success" component={Link} to="/login" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Fade in timeout={1600}>
              <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center', boxShadow: 3 }}>
                <CheckCircle color="success" fontSize="large" />
                <Typography variant="h6">User-Friendly Interface</Typography>
                <Typography>
                  Our platform is designed with simplicity in mind, making it easy for students and administrators to navigate.
                </Typography>
                <Button variant="outlined" component={Link} to="/login" sx={{ mt: 2 }}>
                  Login to Explore
                </Button>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade in timeout={1800}>
              <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center', boxShadow: 3 }}>
                <Security color="primary" fontSize="large" />
                <Typography variant="h6">Secure Authentication</Typography>
                <Typography>
                  We prioritize your security with robust authentication methods to protect your data.
                </Typography>
                <Button variant="outlined" component={Link} to="/login" sx={{ mt: 2 }}>
                  Login to Secure Access
                </Button>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade in timeout={2000}>
              <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center', boxShadow: 3 }}>
                <Update color="action" fontSize="large" />
                <Typography variant="h6">Real-Time Updates</Typography>
                <Typography>
                  Stay informed with real-time updates on your certificate requests and approvals.
                </Typography>
                <Button variant="outlined" component={Link} to="/login" sx={{ mt: 2 }}>
                  Login for Updates
                </Button>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Certificates Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Certificates
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {displayedCertificates.length > 0 ? (
              displayedCertificates.map((certificate, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in timeout={index * 300 + 500}>
                    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center', boxShadow: 3 }}>
                      <Typography variant="h6">{certificate.title}</Typography>
                      <Typography>{certificate.description}</Typography>
                    </Box>
                  </Fade>
                </Grid>
              ))
            ) : (
              <Typography align="center">No certificates found.</Typography>
            )}
          </Grid>
        )}
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: '#28a745', color: 'white', p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to manage your certificates efficiently?
        </Typography>
        <Button variant="contained" color="inherit" component={Link} to="/login">
          Sign In Now
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
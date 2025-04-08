import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
  AccountCircle as AccountIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    appBar: {
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
      color: '#1a1a1a',
      transition: 'all 0.3s ease',
    },
    scrolledAppBar: {
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      fontFamily: "'Cinzel', serif",
      fontWeight: 700,
      letterSpacing: '1px',
      background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    navButton: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      letterSpacing: '0.5px',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '4px',
        left: '0',
        width: '0',
        height: '2px',
        background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
        transition: 'width 0.3s ease',
      },
      '&:hover': {
        background: 'transparent',
        '&:after': {
          width: '100%',
        }
      }
    },
    accountButton: {
      minWidth: '40px',
      height: '40px',
      borderRadius: '50%',
      padding: 0,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
      }
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: 'rgba(255, 255, 255, 0.98)',
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
    },
    mobileMenuItem: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      padding: '16px 0',
      justifyContent: 'flex-start',
    },
    searchButton: {
      minWidth: '40px',
      height: '40px',
      borderRadius: '50%',
      padding: 0,
      marginLeft: '16px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)',
        background: 'linear-gradient(135deg, #e4e8eb 0%, #d5d9dc 100%)',
      }
    }
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
      </style>

      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{
            ...styles.appBar,
            ...(trigger ? styles.scrolledAppBar : {})
          }}
        >
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            padding: { xs: '0 16px', md: '0 48px' },
            minHeight: { xs: '64px', md: '80px' }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="h5" 
                component="div" 
                sx={styles.logo}
              >
                BookVerse
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              gap: '8px'
            }}>
              <Button sx={styles.navButton}>Home</Button>
              <Button sx={styles.navButton}>Explore</Button>
              <Button sx={styles.navButton}>Collections</Button>
              <Button sx={styles.navButton}>Community</Button>
              
              <IconButton sx={styles.searchButton}>
                <SearchIcon />
              </IconButton>
              
              <Button 
                variant="contained" 
                sx={{
                  ...styles.navButton,
                  background: 'linear-gradient(45deg, #8b5cf6, #6d28d9)',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                  ml: 2,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #7c4dff, #5b21b6)',
                    boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                  '&:after': {
                    display: 'none'
                  }
                }}
              >
                Sign In
              </Button>

              <IconButton 
                sx={styles.accountButton}
                onClick={handleMenuOpen}
              >
                <AccountIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    overflow: 'visible',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <AccountIcon sx={{ mr: 1.5 }} /> My Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <BookmarkIcon sx={{ mr: 1.5 }} /> Saved Books
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMobileMenuOpen(true)}
                sx={{ color: '#1a1a1a' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={styles.mobileMenu}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={styles.logo}
            >
              BookVerse
            </Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Button fullWidth sx={styles.mobileMenuItem}>Home</Button>
            <Button fullWidth sx={styles.mobileMenuItem}>Explore</Button>
            <Button fullWidth sx={styles.mobileMenuItem}>Collections</Button>
            <Button fullWidth sx={styles.mobileMenuItem}>Community</Button>
          </Box>

          <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button 
              variant="contained" 
              fullWidth
              sx={{
                background: 'linear-gradient(45deg, #8b5cf6, #6d28d9)',
                color: 'white',
                padding: '12px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #7c4dff, #5b21b6)',
                }
              }}
            >
              Sign In
            </Button>
            <Button 
              fullWidth
              sx={{
                border: '1px solid #ddd',
                padding: '12px',
                borderRadius: '50px',
                fontSize: '1.1rem',
              }}
            >
              Create Account
            </Button>
          </Box>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
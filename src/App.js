import React from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Link,
  Grid,
  Paper,
  TextField,
  GlobalStyles
} from '@mui/material';

// --- DA CUSTOM WAAAGH! THEME ---
// Dis is where we tell MUI how to be more ORKY!

const waaaghTheme = createTheme({
  palette: {
    mode: 'dark', // We'z dark!
    primary: {
      main: '#d70000', // Blood Red
    },
    secondary: {
      main: '#f77f00', // Fiery/Rust Orange
    },
    background: {
      default: '#050505',
      paper: '#111111', // For nav, cards, etc.
    },
    text: {
      primary: '#b0b0b0',
      secondary: '#e0e0e0',
    },
    divider: '#333',
  },
  typography: {
    // Default font
    fontFamily: "'Roboto', sans-serif",

    // Headings font
    h1: { fontFamily: "'Black Ops One', sans-serif", color: '#f77f00', textTransform: 'uppercase', letterSpacing: '1px' },
    h2: { fontFamily: "'Black Ops One', sans-serif", color: '#f77f00', textTransform: 'uppercase', letterSpacing: '1px' },
    h3: { fontFamily: "'Black Ops One', sans-serif", color: '#e0e0e0', textTransform: 'uppercase', letterSpacing: '1px' },
    h4: { fontFamily: "'Black Ops One', sans-serif", color: '#f77f00', textTransform: 'uppercase', letterSpacing: '1px' },
    h5: { fontFamily: "'Black Ops One', sans-serif", color: '#f77f00', textTransform: 'uppercase', letterSpacing: '1px' },
    h6: { fontFamily: "'Black Ops One', sans-serif", color: '#f77f00', textTransform: 'uppercase', letterSpacing: '1px' },

    // Body text
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          // background gradient removed
        },
      },
    },
    // Style all links
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#d70000',
          textDecoration: 'none',
          '&:hover': {
            color: '#f77f00',
            textDecoration: 'underline',
          },
        },
      },
    },
    // Style da main sections
    MuiContainer: {
      styleOverrides: {
        root: {
          // Use 'section' for semantic HTML
          '&.section-container': {
            paddingTop: '4rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid #333',
          }
        }
      }
    },
    // Style da stat/feature boxes
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #333',
          backgroundImage: 'none', // No grot-like gradients
        },
      },
    },
  },
});

// --- DA FLICKER GUBBINZ ---
// We need this for da headin' and button
const flickerAnimation = (
  <GlobalStyles
    styles={{
      '@keyframes flicker': {
        '0%, 100%': { opacity: 1, textShadow: '0 0 5px #f77f00' },
        '50%': { opacity: 0.8, textShadow: '0 0 10px #f77f00' },
      },
      '.flicker': {
        animation: 'flicker 2s linear infinite',
      },
    }}
  />
);

// === CREATE DA AUDIO GUBBINZ (outside da component) ===
// Make sure you have 'waaagh.mp3' in your /public folder!
const waaaghAudio = new Audio('/waaagh.mp3');
// ========================================================


// --- DA PROPPA PAGE COMPONENT ---
function App() {

  // Function to copy da pool ID
  const handleCopy = (event) => {
    const poolId = event.target.value;
    navigator.clipboard.writeText(poolId);
    alert('Pool ID Copied!');
    
    // === PLAY DA SOUND! ===
    try {
      waaaghAudio.play();
    } catch (err) {
      console.error("Audio error!", err); // In case da browser blocks it
    }
    // ==========================
  };

  return (
    <ThemeProvider theme={waaaghTheme}>
      <CssBaseline /> {/* Applies our custom background */}
      {flickerAnimation} {/* Adds da flicker keyframes */}

      {/* --- HEADER & HERO --- */}
      <Box
        component="header"
        sx={{
          textAlign: 'center',
          padding: '5rem 0',
          // Images in the /public folder are served from the root
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/Gemini_Generated_Image_lz5su2lz5su2lz5s.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
        }}
      >
        <Container>
          <Typography variant="h1" className="flicker" sx={{ fontSize: { xs: '3.5rem', sm: '5rem' }, margin: 0 }}>
            WAAAGH! POOL
          </Typography>
          <Typography variant="h4" sx={{ color: 'text.secondary', fontSize: '2.5rem', mb: '1.5rem' }}>
            [ $WAGH ]
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '1.5rem', fontWeight: 700 }}>
            JOIN DA GREAT WAAAGH! DELEGATE YER ADA AND GET MORE TEEF!
          </Typography>
          <Button
            href="#delegate"
            variant="contained"
            className="flicker"
            sx={{
              fontFamily: "'Black Ops One', sans-serif",
              fontSize: '1.5rem',
              padding: '1rem 2.5rem',
              marginTop: '2rem',
              border: '2px solid',
              borderColor: 'secondary.main',
              color: '#fff',
              textShadow: '0 0 5px #000',
              '&:hover': {
                backgroundColor: 'secondary.main',
                color: '#000',
                borderColor: 'primary.main',
                transform: 'scale(1.05)',
              },
            }}
          >
            DELEGATE NOW!
          </Button>
        </Container>
      </Box>

      {/* --- NAVIGATION --- */}
      <AppBar position="sticky" sx={{ background: '#111', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#about" sx={{ fontFamily: "'Black Ops One', sans-serif", margin: { xs: '0.5rem', sm: '0 1.5rem' }, fontSize: '1.2rem', color: 'text.primary' }}>
            WOTZ DA PLAN?
          </Link>
          <Link href="#stats" sx={{ fontFamily: "'Black Ops One', sans-serif", margin: { xs: '0.5rem', sm: '0 1.5rem' }, fontSize: '1.2rem', color: 'text.primary' }}>
            DA LOOT
          </Link>
          <Link href="#why" sx={{ fontFamily: "'Black Ops One', sans-serif", margin: { xs: '0.5rem', sm: '0 1.5rem' }, fontSize: '1.2rem', color: 'text.primary' }}>
            WHY WE'Z DA BEST
          </Link>
          <Link href="#midnight" sx={{ fontFamily: "'Black Ops One', sans-serif", margin: { xs: '0.5rem', sm: '0 1.5rem' }, fontSize: '1.2rem', color: 'text.primary' }}>
            DA NEXT BIG SCRAP!
          </Link>
          <Link href="#delegate" sx={{ fontFamily: "'Black Ops One', sans-serif", margin: { xs: '0.5rem', sm: '0 1.5rem' }, fontSize: '1.2rem', color: 'text.primary' }}>
            GET IN DA FIGHT!
          </Link>
        </Toolbar>
      </AppBar>

      {/* --- ABOUT SECTION --- */}
      <Container component="section" id="about" className="section-container">
        <Typography variant="h2" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: '10px' }}>
          WOTZ DA PLAN?
        </Typography>
        <Typography variant="body1" paragraph>
          WAAAGH! POOL ain't like dem other runty pools. We'z here for one fing and one fing only:
          to build da biggest, meanest, and most PROPPA Cardano stake pool in da galaxy!
        </Typography>
        <Typography variant="body1" paragraph>
          Run by a Mekboy who knows his gubbinz, our servers are powered by pure WAAAGH! energy
          (and some high-spec bare-metal rigs) to make sure we never miss a block. When you
          delegate wit' us, you're not just stakin' ADA... you're joinin' da WARBAND!
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide consistent rewards to our delegators while supportin' da network.
          More teef for you, more power for da WAAAGH!
        </Typography>
      </Container>

      {/* --- STATS SECTION --- */}
      <Container component="section" id="stats" className="section-container">
        <Typography variant="h2" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: '10px' }}>
          DA LOOT & STATS
        </Typography>
        <Typography variant="body1" paragraph>
          Here's da info you need, ya git. All our stats are public and verifiable. We're always ready for a scrap!
        </Typography>
        
        <Paper sx={{ padding: '2rem' }}>
          <Grid container spacing={2}>
            {/* Ticker */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Ticker</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>$WAGH</Typography>
              </Box>
            </Grid>
            {/* Pledge */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Pledge</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>[YOUR_PLEDGE_AMOUNT] ₳</Typography>
              </Box>
            </Grid>
            {/* Pool Fee */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Pool Fee</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>[YOUR_FEE_PERCENTAGE]%</Typography>
              </Box>
            </Grid>
            {/* Uptime */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Uptime</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>99.9% (OR ELSE!)</Typography>
              </Box>
            </Grid>
            {/* Hardware */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Hardware</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>PROPPA MEK-BUILT RIGS (BARE-METAL)</Typography>
              </Box>
            </Grid>
            {/* Location */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: '1.5rem' }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', mb: '0.25rem' }}>Location</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', m: 0 }}>[YOUR_SERVER_LOCATION]</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* --- WHY US SECTION --- */}
      <Container component="section" id="why" className="section-container">
        <Typography variant="h2" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: '10px' }}>
          WHY WE'Z DA BEST
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: '2rem' }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', borderTop: '4px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h3" gutterBottom>PROPPA HARDWARE</Typography>
              <Typography variant="body1">
                We don't use no grot-built tin cans. Our pool runs on dedicated bare-metal servers with redundant backups. Dat means 99.9%+ uptime and reliable block production.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', borderTop: '4px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h3" gutterBottom>LOW FEEZ, MORE TEEF!</Typography>
              <Typography variant="body1">
                We keep da margin low so you get to keep more of yer rewards. Da Mekboy takes just enough to keep da lights on and da squigs fed. A fair fight for everyone.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', borderTop: '4px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h3" gutterBottom>FOR DA WAAAGH!</Typography>
              <Typography variant="body1">
                We're not just here for da teef. We're buildin' a community (a 'Warband'!). A portion of pool operator rewards goes to [YOUR_MISSION/CHARITY].
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* --- MIDNIGHT NOTICE SECTION --- */}
      <Container component="section" id="midnight" className="section-container">
        <Typography variant="h2" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: '10px' }}>
          A PROPPA LOOKAHEAD: MIDNIGHT
        </Typography>
        <Paper sx={{ padding: '2rem', border: '2px solid', borderColor: 'secondary.main', background: '#1a1a1a' }}>
          <Typography variant="body1" paragraph>
            Da Big Meks are always buildin' new gubbinz. We'z got our eye on a kunnin' new project dey call <strong>'Midnight'</strong>. 
            WAAAGH! POOL is already gettin' da boyz ready.
          </Typography>
          <Typography variant="body1" paragraph>
            When dat sneaky new chain launches, we'z gonna be one o' da first to support it, 
            runnin' nodes and smashin' blocks. More places to WAAAGH! means more teef for everyone!
          </Typography>
        </Paper>
      </Container>


      {/* --- DELEGATE SECTION --- */}
      <Container component="section" id="delegate" className="section-container" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: '10px' }}>
          GET IN DA FIGHT!
        </Typography>
        <Typography variant="body1" paragraph>
          Ready to join da WAAAGH!? Open yer favorite wallet (Yoroi, Eternl, Daedalus, etc.)
          and search for our ticker:
        </Typography>
        <Typography variant="h1" sx={{ fontSize: '4rem', mt: '2rem', color: 'secondary.main' }}>
          $WAGH
        </Typography>
        
        <Box sx={{ mt: '2rem' }}>
          <Typography variant="body1" sx={{ fontFamily: "'Black Ops One', sans-serif", color: 'text.secondary', fontSize: '1.2rem', mb: '0.5rem' }}>
            Or just copy da Pool ID (Click da box):
          </Typography>
          <TextField
            value="[YOUR_POOL_ID_HERE_pool1xyz...]"
            onClick={handleCopy}
            InputProps={{
              readOnly: true,
            }}
            sx={{
              maxWidth: '600px',
              width: '100%',
              cursor: 'copy',
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper',
              },
              '& input': {
                textAlign: 'center',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '1.1rem',
                color: 'secondary.main',
                cursor: 'copy',
              },
            }}
          />
        </Box>
      </Container>

      {/* --- FOOTER --- */}
      <Box component="footer" sx={{ textAlign: 'center', padding: '3rem 1rem', background: '#000', borderTop: '1px solid', borderColor: 'divider', color: '#777' }}>
        <Container>
          {/* === UPDATED SOCIAL LINKS === */}
          <Box className="social-links">
            <Link href="https://x.com/stevanlohja" target="_blank" sx={{ fontFamily: "'Black Ops One', sans-serif", fontSize: '1.2rem', margin: '0 1rem', color: 'text.primary' }}>
              X (TWITTER)
            </Link>
          </Box>
          {/* ============================ */}
          <Typography variant="body2" sx={{ marginTop: '2rem', color: '#777' }}>
            WAAAGH! POOL [$WAGH] - Built by a Mek, for da Boyz.
            <br />
            &copy; {new Date().getFullYear()} All rights reserved... or we'll smash ya.
          </Typography>
        </Container>
      </Box>

    </ThemeProvider>
  );
}

export default App;
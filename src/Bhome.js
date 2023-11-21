import * as React from 'react';
import './Home.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Navbar from './Navbar';

function Copyright() {
  return (
   
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function Bhome() {
 
  return (
 
    <ThemeProvider theme={defaultTheme}>
      <Navbar/>
      <CssBaseline />

      <main id='mainblock'>
        <div style={{height:'100px'}}></div>
        <h3 id='text'>TESTIMONIAL </h3>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} className='fname'>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/95/14/a2/9514a2106bdf506dc2ed2047ae4ba908.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                    Login1
                    <hr></hr>
                  </Typography>
                  <Typography>
                  HireSmart is simple and easy to use. I am impressed, especially with the service provided by the team. They have been extremely responsive to our needs and we were able to go live with our global installation within a week of implementation. I will definitely recommend HireSmart to any organization that requires a good solution and prompt service.
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/95/14/a2/9514a2106bdf506dc2ed2047ae4ba908.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Comfortaa"}}>
                    Login2<hr></hr>
                  </Typography>
                  <Typography>

                    <br></br>
                    HireSmart is simple and easy to use. I am impressed, especially with the service provided by the team. I will definitely recommend HireSmart to any organization that requires a good solution and prompt service.
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/95/14/a2/9514a2106bdf506dc2ed2047ae4ba908.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Comfortaa"}}>
                    Login3
                    <hr></hr>
                  </Typography>
                  <Typography>
                   I am impressed, especially with the service provided by the team. They have been extremely responsive to our needs and we were able to go live with our global installation within a week of implementation. I will definitely recommend HireSmart to any organization that requires a good solution and prompt service.
                  </Typography>
                </CardContent>
                <CardActions>
               
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer/>
    </ThemeProvider>
  );
}
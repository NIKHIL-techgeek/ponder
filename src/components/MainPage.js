import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { display } from '@mui/system';
import './MainPage.css'
import logo from '../assets/logo.svg'
import wildhacks from '../assets/wildhacks.svg'
import backyards from '../assets/backyards.svg'
import hackwithcrew from '../assets/hackwithcrew.svg'
import rdvhacks from '../assets/rdvhacks.svg'
import houdinihacks from '../assets/houdinihacks.svg'
import snakes from '../assets/snakes.svg'
import hackthe6ix from '../assets/hackthe6ix.svg'
import penapps from '../assets/penapps.svg'
import globalhackweek from '../assets/globalhackweek.svg'
import hacksmuiv from '../assets/hacksmuiv.svg'
import image2vector_2 from '../assets/image2vector_2.svg'
export default function App() {
  return (
     <div> 
      <div className='og'> <img src={logo} className='img-container'/>
      <nav class="main-nav">
            
        <Stack spacing={2} direction="row" >
      <Button variant="text" size="large">home</Button>
      <Button variant="text" size="large">about</Button>
      <Button variant="text" size="large">contact</Button>
    </Stack>            
            
        </nav>
        
    </div>


    
       
  
    <div className='parent'>
      <div className='child'>
      <a href='/people'>
    <Card sx={{ maxWidth: 345}} style={{ width: '18rem', height: '18rem', whiteSpace:'pre-wrap'  }}>
      <CardMedia
        component="img"
        height="180"
        image={wildhacks}
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          WILD HACKS II (AUG 5TH-7TH)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          APAC TIMEZONE -ONLINE 
        </Typography>
      </CardContent>
    </Card>
    </a>
      </div>
      
    <div className='child'>
    <a href='/people'>
    <Card sx={{ maxWidth: 345 , marginLeft: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
        image={backyards}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BACKYARD HACKS 3 (JULY 29TH - 31ST)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          NORTH AMERICAN TIME ZONE -ONLINE
        </Typography>
      </CardContent>
      
    </Card>
    </a>
    </div>
<div className='child'>
<a  href='/people'>
    <Card sx={{ maxWidth: 345 , marginLeft: '1rem'}}>
      <CardMedia
        component="img"
        height="140"
        image={hackwithcrew}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HACK WITH CREW (AUG 5TH -7TH)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          NORTH AMERICAN TIMEZONE-ONLINE
        </Typography>
      </CardContent>
      
    </Card>
    </a>
</div>

<div className='child'>
    <a  href='/people'>
        <Card sx={{ marginLeft: '1rem'}}>
          <CardMedia
            component="img"
            height="230"
            image={rdvhacks}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              RDV HACKS (AUG 6TH - 7TH)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              NEW YORK CITY, NEW YORK - IN PERSON ONLY
            </Typography>
          </CardContent>
          
        </Card>
        </a>
    </div>

    <div className='child'>
        <a  href='/people'>
            <Card sx={{ maxWidth: 345 , marginLeft: '1rem' }}>
              <CardMedia
                component="img"
                height="290"
                image={houdinihacks}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HOUDINIHACKS II (AUG 12TH - 14TH)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NORTH AMERICAN TIMEZONE-ONLINE
                </Typography>
              </CardContent>
              
            </Card>
            </a>
        </div>

        <div className='child'>
            <a  href='/people'>
                <Card sx={{ maxWidth: 345, marginLeft: '1rem' }}>
                  <CardMedia
                    component="img"
                    height="290"
                    image={snakes}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      SNAKES AND HACKERS II (AUG 12TH - 14TH)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      APAC TIMEZONE, ONLINE
                    </Typography>
                  </CardContent>
                  
                </Card>
                </a>
        </div>

        <div className='child'>
            <a  href='/people'>
                    <Card sx={{ marginLeft: '1rem'}}>
                      <CardMedia
                        component="img"
                        height="290"
                        width="220"
                        image={hackthe6ix}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          HACK THE 6IX
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          EVERYWHERE WORLDWIDE-ONLINE
                        </Typography>
                      </CardContent>
                      
                    </Card>
            </a>
        </div>

        <div className='child'>
                    <a  href='/people'>
                        <Card sx={{ maxWidth: 345, marginLeft: '1rem' }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={penapps}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              PENNAPPS XXIII
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              PHILADELPHIA, PENNSYLVANIA - IN PERSON ONLY
                            </Typography>
                          </CardContent>
                          
                        </Card>
                        </a>
        </div>

                    <div className='child'>
                        <a  href='/people'>
                            <Card sx={{ maxWidth: 345 , marginLeft: '1rem'}}>
                              <CardMedia
                                component="img"
                                height="260"
                                image={globalhackweek}
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  GLOBAL HACK WEEK SEPTEMBER
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  EVERYWHERE WORLDWIDE - ONLINE
                                </Typography>
                              </CardContent>
                              
                            </Card>
                            </a>
                        </div>

                        <div className='child'>
                            <a  href='/people'>
                                <Card sx={{ maxWidth: 345 , marginLeft: '1rem'}}>
                                  <CardMedia
                                    component="img"
                                    height="260"
                                    image={hacksmuiv}
                                    alt="green iguana"
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      HACKSMU IV (SEP 16TH - 18TH)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      DALLAS, TEXAS - IN PERSON 
                                    </Typography>
                                  </CardContent>
                                  
                                </Card>
                                </a>
                            </div>
    </div> 
     </div>
  
  )
}
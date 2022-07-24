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
export default function App() {
  return (
     <div>
        <nav class="main-nav">
            
        <Stack spacing={2} direction="row" >
      <Button variant="text" size="large">home</Button>
      <Button variant="text" size="large">about</Button>
      <Button variant="text" size="large">contact</Button>
    </Stack>            
            
        </nav>
        <section class="top-container">
        <header class="showcase">
            <h1>sample text</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed minus consequatur odit. Ipsum, quis.</p>
            <a href="#" class="btn">Sample text</a>
        </header>
        
    </section>
  
    <div className='parent'>
      <div className='child'>
      <a href='/people'>
    <Card sx={{ maxWidth: 345}} style={{ width: '18rem', height: '18rem', whiteSpace: 'pre-wrap' }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../assets/unknown.png"
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
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
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
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
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
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
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
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
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
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
                            <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
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
                                <Card sx={{ maxWidth: 345 }}>
                                  <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
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
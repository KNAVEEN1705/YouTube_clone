import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      width:{xs:'356px' , md:'360px'},
      height:'326px',
      margin:'auto'
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          component="img"
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title || 'Channel Image'}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb:2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant='h6' align='center'>{channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:'grsy' ,ml:'5px'}}/>
        </Typography>
        {
            channelDetail ?. statistics ?. subscriberCount && (
              <Typography>
                {parseInt(channelDetail ?. statistics ?. subscriberCount).toLocaleString()}
              </Typography>
            )
          }
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;


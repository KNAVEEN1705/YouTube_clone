import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        if (data?.items && data.items.length > 0) {
          setChannelDetail(data.items[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching channel details:', error);
      });

    // Fetch videos for the channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        if (data?.items && data.items.length > 0) {
          setVideos(data.items);
        }
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

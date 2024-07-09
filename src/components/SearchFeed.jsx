import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos'; // Assuming this is your component to render videos
import { fetchFromAPI } from '../utils/fetchFromAPI'; // Ensure fetchFromAPI is correctly imported

const SearchFeed = () => {
  const [videosData, setVideosData] = useState([]);
  const { searchTerm } = useParams(); // Use lowercase `searchTerm`

  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
        setVideosData(data.items)
      );
    }
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videosData} />
    </Box>
  );
};

export default SearchFeed;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} /> {/* Corrected path */}
                <Route path='/search/:searchTerm' element={<SearchFeed />} /> {/* Corrected parameter name */}
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;

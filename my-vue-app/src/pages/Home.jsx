import { Box, Input,Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {PostModal} from '../components/Modal';
import {Navbar} from '../components/Navbar';


const Home = () => {
 
  return (
   
    <Box >
    <Navbar/>
    <Box>
      <Input/>
      <Button>Search</Button>
    </Box>
    <Box>
      {/* <PostModal/> */}
    </Box>

    </Box>
   
  );
};

export default Home;

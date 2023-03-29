import {
  VisuallyHidden,
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  chakra,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillCameraVideoFill } from 'react-icons/bs';

import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from 'react-icons/ai';

import { useNavigate} from 'react-router-dom';

const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const navigate=useNavigate()

 const token=localStorage.getItem("token")
 
 if(token==null){
  navigate("/login")
 }
  
  const handleLogout=()=>{
    console.log("ok")
    localStorage.removeItem("token");
      
  }
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* {<Logo />} */}
              <VisuallyHidden>Logo</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Blog</Button>
              <Button variant="ghost">Company</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            <Button
              color="white"
              bgColor={'blue.400'}
              size="sm"
              _hover={{
                bgColor: 'red.400',
                color: 'white',
              }}
              onClick={handleLogout}
            >
              Logout
              {/* Get Started */}
            </Button>
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost"
               >
                  logout
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Navbar;

import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import './App.css'
import { Box, Flex, Heading, IconButton, Spacer, VStack } from "@chakra-ui/react"
import { ColorModeButton, useColorModeValue } from './components/ui/color-mode';

function App() {

  return (
    <Box width='100vw' height='100vh' bg={useColorModeValue("white", "black")} >
      <VStack p='5' >
        <Flex w='100%'>
          <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>rakafebriansy</Heading>
          <Spacer></Spacer>
          <Flex gap='5' alignItems='center'>
            <IconButton rounded='full' bg={useColorModeValue('teal.100', 'teal.900')} color={useColorModeValue('teal.900', 'teal.100')}>
              <FaInstagram />
            </IconButton>
            <IconButton rounded='full' bg={useColorModeValue('teal.100', 'teal.900')} color={useColorModeValue('teal.900', 'teal.100')}>
              <FaGithub />
            </IconButton>
            <IconButton rounded='full' bg={useColorModeValue('teal.100', 'teal.900')} color={useColorModeValue('teal.900', 'teal.100')}>
              <FaLinkedin />
            </IconButton>
            <ColorModeButton rounded='full' bg={useColorModeValue('teal.100', 'teal.900')} />
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
}

export default App

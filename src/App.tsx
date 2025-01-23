import './App.css'
import { Box, VStack } from "@chakra-ui/react"
import { useColorModeValue } from './components/ui/color-mode';
import HeaderSection from './components/sections/Header';
import ProfileSection from './components/sections/Profile';
import SocialSection from './components/sections/Social';
import TopBarSection from './components/sections/TopBar';

function App() {

  return (
    <Box width='100vw' height='100vh' bg={useColorModeValue("white", "black")} >
      <VStack p='5' >
        <TopBarSection/>
        <HeaderSection />
        <SocialSection />
        <ProfileSection />
      </VStack>
    </Box>
  );
}

export default App

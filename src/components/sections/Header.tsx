import { Box, Button, Circle, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../ui/color-mode";

const Header: React.FC = ({ }) => {

    return (
        <Stack>
            <Circle position='absolute' bg='blue.100' opacity='0.5' w='18rem' h='18rem' alignSelf='flex-end' zIndex='0'></Circle>
            <Flex zIndex='1' direction={{ base: 'column', lg: 'row' }} p={{ base: '0', lg: '32' }} alignSelf='flex-start'>
                <Box mt={{ base: '16', lg: '0' }} alignItems='flex-start'>
                    <Text fontSize='5xl' fontWeight='semibold'>Hi, I'am</Text>
                    <Text fontSize='7xl' fontWeight='bold' bgGradient='to-r' gradientFrom='cyan.400' gradientVia='blue.500' gradientTo='purple.600' bgClip='text'>Raka Febrian</Text>
                    <Text color={useColorModeValue('gray.500', 'gray.200')}>Fullstack Web Developer. FrontEnd Developer. BackRnd Developer. Mobile Developer. DevOps Engineer 🧑‍💻</Text>
                    <Button mt='8' colorScheme='blue' onClick={() => window.open('https://wa.me/6287768434281')}>Contact Me</Button>
                </Box>
                <Image alignSelf='center' my={{ base: '12', lg: '0' }} borderRadius='full' backgroundColor='transparent' boxShadow='lg' boxSize='18rem' src='dino.jpg' />
            </Flex>
        </Stack>
    );
}
export default Header;
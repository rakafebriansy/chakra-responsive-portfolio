import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { DiAndroid, DiLaravel, DiDotnet } from "react-icons/di";

const Profile: React.FC = ({ }) => {
    return (
        <Flex direction={{ base: 'column', lg: 'row' }} w='100%' maxWidth={{ base: '100vh', md: '130vh' }}>
            <Box alignSelf='center' px='8' py='16'>
                <Heading fontWeight='extrabold' color='cyan.500' size='4xl'>2+</Heading>
                <Text fontSize='2xl' color='gray.400'>Years of Experience</Text>
            </Box>
            <Box alignSelf='center' px='8' py='16'>
                <Text fontWeight='bold' fontSize='2xl'>Software Engineer, specialised in mobile app, web apps, and enterprise system development.</Text>
                <Flex direction={{ base: 'column', lg: 'row' }} mt='8' gap='8'>
                    <Flex rounded='xl' direction='column' mt='4' bg='blue.400' h='30vh' justify='flex-end' w='16rem' _hover={{ bg: 'teal.400' }}>
                        <Icon color='white' p='4' as={DiAndroid} w='24' h='24'></Icon>
                        <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>Android & iOS Apps</Text>
                    </Flex>
                    <Flex rounded='xl' direction='column' mt='4' bg='blue.400' h='30vh' justify='flex-end' w='16rem' _hover={{ bg: 'red.600' }}>
                        <Icon color='white' p='4' as={DiLaravel} w='24' h='24'></Icon>
                        <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>Progressie Website App</Text>
                    </Flex>
                    <Flex rounded='xl' direction='column' mt='4' bg='blue.400' h='30vh' justify='flex-end' w='16rem' _hover={{ bg: 'purple.800' }}>
                        <Icon color='white' p='4' as={DiDotnet} w='24' h='24'></Icon>
                        <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>Enterprise System</Text>
                    </Flex>
                </Flex>
            </Box>

        </Flex>
    );
}
export default Profile;
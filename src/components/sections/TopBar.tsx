import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react"
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";

const TopBar: React.FC = ({ }) => {
    return (
        <Flex w='100%' pb='10'>
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
    );
}
export default TopBar;
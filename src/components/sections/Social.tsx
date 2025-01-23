import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa";

const Social: React.FC = ({ }) => {
    return (
        <HStack spaceX={{ base: '12', lg: '24' }}>
            <Icon boxSize={{ base: '2rem', lg: '3rem' }}>
                <FaFacebook />
            </Icon>
            <Icon boxSize={{ base: '2rem', lg: '3rem' }}>
                <FaGoogle />
            </Icon>
            <Icon boxSize={{ base: '2rem', lg: '3rem' }}>
                <FaSpotify />
            </Icon>
            <Icon boxSize={{ base: '2rem', lg: '3rem' }}>
                <FaShopify />
            </Icon>
        </HStack>
    );
}
export default Social;  
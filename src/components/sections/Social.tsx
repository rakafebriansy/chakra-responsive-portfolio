import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa";

const Social: React.FC = ({ }) => {
    return (
        <HStack spaceX='24'>
            <Icon boxSize='3rem'>
                <FaFacebook />
            </Icon>
            <Icon boxSize='3rem'>
                <FaGoogle />
            </Icon>
            <Icon boxSize='3rem'>
                <FaSpotify />
            </Icon>
            <Icon boxSize='3rem'>
                <FaShopify />
            </Icon>
        </HStack>
    );
}
export default Social;  
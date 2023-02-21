import { Flex,Text } from '@chakra-ui/react';
import React from 'react';

type HomeMenuProps = {
    
};

const HomeMenu:React.FC<HomeMenuProps> = () => {
    
    return (
        <Flex direction='column' width='600px'>
            <Flex>
                <Text color='brand.900'>Home</Text>
            </Flex>
            <Flex>For you</Flex>
        </Flex>
    )
}
export default HomeMenu;
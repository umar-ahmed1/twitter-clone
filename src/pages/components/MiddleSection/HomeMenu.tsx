import { Flex,Text } from '@chakra-ui/react';
import React from 'react';

type HomeMenuProps = {
    
};

const HomeMenu:React.FC<HomeMenuProps> = () => {
    const [contentType,setContentType] = React.useState('For You')
    
    return (
        <Flex direction='column' width='100%'>
            <Flex p='0px 16px' height='53px' align='center'>
                <Text fontSize='20px' fontWeight={700} color='brand.900'>Home</Text>
            </Flex>
            <Flex width='100%' align='center' borderBottom='1px solid grey'>
                <Flex width='50%' justify='center' align='center'>
                    <Flex 
                        height='53px'
                        borderBottom={contentType ==='For You' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'
                        cursor='pointer'
                        onClick={() => setContentType('For You')}
                    >
                        <Text color='brand.900' fontSize='15px' fontWeight={600}>For You</Text>
                    </Flex>
                </Flex>
                <Flex width='50%' justify='center' align='center'>
                    <Flex 
                        height='53px' 
                        borderBottom={contentType ==='Following' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'
                        cursor='pointer'
                        onClick={() => setContentType('Following')}
                    >
                        <Text color='brand.900' fontSize='15px' fontWeight={600}>Following</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default HomeMenu;
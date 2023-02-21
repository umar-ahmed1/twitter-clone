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
            <Flex width='100%' align='center' borderBottom='1px solid #2F3336'>
                <Flex 
                    width='50%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('For You')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px'
                        borderBottom={contentType ==='For You' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'
                    >
                        <Text color='brand.900' fontSize='15px' fontWeight={600}>For you</Text>
                    </Flex>
                </Flex>
                <Flex 
                    width='50%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('Following')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px' 
                        borderBottom={contentType ==='Following' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'   
                    >
                        <Text color='brand.900' fontSize='15px' fontWeight={600}>Following</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}
export default HomeMenu;
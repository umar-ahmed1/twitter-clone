import { UserDetails } from '@/components/LoginSignup/CreateAccount/CreateAccount';
import { Box, Button, Flex,Icon,Stack,Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import {AiOutlineArrowLeft,AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

type HeaderProps = {
    userData: UserDetails
};

const Header:React.FC<HeaderProps> = ({userData}) => {
    const [contentType,setContentType] = React.useState('Tweets')
    //use router for redirects
    const router=useRouter()
    return (
        <Flex direction='column' width='100%'>
            <Flex width='100%' p='0px 16px' height='53px' align='center'>
                <Flex width='56px' cursor='pointer' >
                    <Flex _hover={{ bg: 'whiteAlpha.200' }} p={2} borderRadius='full' onClick={() => router.push('/')}>
                        <Icon as={AiOutlineArrowLeft} color='brand.900' fontSize={20}/>
                    </Flex>
                </Flex>
                <Flex direction='column' justify='flex-start'>
                    <Text fontWeight={600} color='brand.900' fontSize='20px'>{userData?.displayName}</Text>
                    <Text color='brand.700' fontSize='13px'>50k Tweets </Text>
                </Flex> 
            </Flex>
            <Box height='200px' bg='brand.700'/>
            <Flex pl='16px' pr='16px' height='70px' justify='space-between' align='center'>
                <Icon fontSize={132} position='relative' top='-40px' as={AiOutlineUser} color='brand.900' border='4px solid black' borderRadius='50%'/>
                <Stack direction='row' align='center'>
                    <Flex border='1px solid' borderColor='brand.700' p={2} borderRadius='full'>
                        <Icon as={BsThreeDots} color='brand.900' fontSize='20px'></Icon>
                    </Flex>
                    <Flex border='1px solid' borderColor='brand.700' p={2} borderRadius='full'>
                        <Icon as={AiOutlineMail} color='brand.900' fontSize='20px'></Icon>
                    </Flex>
                    <Button borderRadius='full'>Follow</Button>
                </Stack>
            </Flex>
            <Stack mb='16px' p='12px 16px 0px 16px'>
                <Flex direction='column' justify='flex-start'>
                    <Text fontWeight={600} color='brand.900' fontSize='20px'>{userData?.displayName}</Text>
                    <Text color='brand.700' fontSize='15px'>@{userData?.identifier}</Text>
                </Flex>
                <Text color='brand.900' fontSize='15px'>About me information</Text>
                <Flex>
                    <Flex mr='20px'> 
                        <Text color='brand.900' fontWeight={600} mr='4px'>668</Text>
                        <Text color='brand.700'>Following</Text>
                    </Flex>
                    <Flex>
                        <Text color='brand.900' fontWeight={600} mr='4px'>668</Text>
                        <Text color='brand.700'>Followers</Text>
                    </Flex>
                </Flex>    
            </Stack>
            <Flex width='100%' align='center' borderBottom='1px solid #2F3336'>
                <Flex 
                    width='25%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('Tweets')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px'
                        borderBottom={contentType ==='Tweets' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'
                    >
                        <Text color={contentType ==='Tweets' ? 'brand.900' : 'brand.700'} fontSize='15px' fontWeight={600}>Tweets</Text>
                    </Flex>
                </Flex>
                <Flex 
                    width='25%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('Tweets & Replies')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px' 
                        borderBottom={contentType ==='Tweets & Replies' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'   
                    >
                        <Text color={contentType ==='Tweets & Replies' ? 'brand.900' : 'brand.700'} fontSize='15px' fontWeight={600}>Tweets & Replies</Text>
                    </Flex>
                </Flex>
                <Flex 
                    width='25%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('Media')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px' 
                        borderBottom={contentType ==='Media' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'   
                    >
                        <Text color={contentType ==='Media' ? 'brand.900' : 'brand.700'} fontSize='15px' fontWeight={600}>Media</Text>
                    </Flex>
                </Flex>
                <Flex 
                    width='25%' 
                    justify='center' 
                    align='center' 
                    _hover={{ bg: 'whiteAlpha.200' }} 
                    onClick={() => setContentType('Likes')} 
                    cursor='pointer'
                >
                    <Flex 
                        height='53px' 
                        borderBottom={contentType ==='Likes' ? '4px solid #1D9BF0' : ''}
                        borderRadius={1}
                        align='center'   
                    >
                        <Text color={contentType ==='Likes' ? 'brand.900' : 'brand.700'} fontSize='15px' fontWeight={600}>Likes</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Header;
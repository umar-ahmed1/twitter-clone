import { Flex, Stack, Icon, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { BiHomeCircle } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { BsBookmark, BsPerson } from 'react-icons/bs'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import {SlSocialTwitter} from 'react-icons/sl'

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <Flex maxWidth='31%' justify='flex-end' height='1000px' flexGrow={1}>
            <Stack direction='column' spacing={2} p={3} position='fixed'>
                <Flex
                    align='center'
                    cursor='pointer'
                    width='100%'
                    p='12px'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    borderRadius='full'
                >
                    <Icon as={SlSocialTwitter} fontSize={28} color='brand.900'/>
                </Flex>
                
                <Flex
                    align='center'
                    cursor='pointer'
                    width='100%'
                    p='12px'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    borderRadius='full'
                >

                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={BiHomeCircle}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Home</Text>
                    </Flex>     
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={FaHashtag}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Explore</Text>
                    </Flex>     
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={IoIosNotificationsOutline}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Notifications</Text>
                    </Flex>   
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={AiOutlineMail}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Messages</Text>
                    </Flex>   
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={BsBookmark}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Bookmarks</Text>
                    </Flex>   
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={BsPerson}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>Profile</Text>
                    </Flex>   
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >
                    <Icon
                        color='brand.900'
                        fontSize={28}
                        as={HiOutlineDotsCircleHorizontal}
                        mr={2}
                    />
                    <Flex display={{sm:'none', md:'none',lg:'flex'}}>
                        <Text fontSize='20px'color='brand.900'>More</Text>
                    </Flex>   
                </Flex>
                <Flex
                    align='center'
                    cursor='pointer'
                    _hover={{ bg: 'whiteAlpha.200' }}
                    p='12px'
                    borderRadius='full'
                >   
                    <Button flexGrow={1} color='brand.900' bg='brand.100' borderRadius='full' pl={{md:'16px',lg:'32px'}} pr={{md:'16px',lg:'32px'}} height='52px'>
                        <Icon
                            color='brand.900'
                            fontSize={28}
                            as={HiOutlineDotsCircleHorizontal}
                            mr={2}
                            display={{sm:'flex', md:'flex',lg:'none'}}
                        />
                        <Text display={{sm:'none',md:'none',lg:'unset'}}>Tweet</Text>
                    </Button>  
                </Flex>
                
            </Stack>
        </Flex>

    )
}
export default Navbar;
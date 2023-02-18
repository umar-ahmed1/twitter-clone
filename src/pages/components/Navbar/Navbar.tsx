import { Flex, Stack, Icon,Text} from '@chakra-ui/react';
import React from 'react';
import {BiHomeCircle} from 'react-icons/bi'
import {FaHashtag} from 'react-icons/fa'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {BsBookmark,BsPerson} from 'react-icons/bs'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return (
        <Stack direction='column' spacing={3} p={5} width='20%'>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={BiHomeCircle}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Home</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={FaHashtag}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Explore</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={IoIosNotificationsOutline}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Notifications</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={AiOutlineMail}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Messages</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={BsBookmark}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Bookmarks</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={BsPerson}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>Profile</Text>
            </Flex>
            <Flex 
                align='center' 
                cursor='pointer'
                _hover={{bg:'whiteAlpha.200' }}
            >
                <Icon 
                    color='brand.900' 
                    fontSize={24}
                    as={HiOutlineDotsCircleHorizontal}
                    mr={2}
                />
                <Text color='brand.900' fontWeight={600}>More</Text>
            </Flex>
        </Stack>
    )
}
export default Navbar;
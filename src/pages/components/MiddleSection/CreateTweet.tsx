import { Flex, Stack, Text, Icon, Input, Button } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineUser, AiOutlinePicture, AiOutlineSchedule} from 'react-icons/ai'
import {HiOutlineGif} from 'react-icons/hi2'
import {CiCircleList, CiLocationOn} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'

type HomeProps = {
    
};

const CreateTweet:React.FC<HomeProps> = () => {
    const [tweetText,setTweetText] = React.useState('') 
    
    return (
        <Flex height='120px' width='100%' borderBottom='1px solid #2F3336' pt='4px'>
            <Flex pl='16px' pr='16px' width='100%'>
                <Flex pt='4px' mr='12px'>
                    <Icon as={AiOutlineUser} fontSize={48} color='brand.900' cursor='pointer' _hover={{opacity:'0.9'}}/>
                </Flex>
                <Flex direction='column' flexGrow={1} pt='4px'>
                    <Flex height='50%'>
                        <Input 
                            type='text' 
                            width='100%' 
                            height='100%' 
                            p={0} 
                            color='brand.900' 
                            fontSize='20px' 
                            placeholder="What's happening?" 
                            border='none'
                            _placeholder={{color:'brand.700'}}
                            _focus={{boxShadow:'none'}}
                            value={tweetText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTweetText(event.target.value)}
                        ></Input>
                    </Flex>
                    <Flex flexGrow={1} justify='space-between' align='center'>
                        <Stack align='center' direction='row' spacing={4}>
                            <Icon 
                                color='brand.100' 
                                as={AiOutlinePicture} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                            <Icon 
                                color='brand.100' 
                                as={HiOutlineGif} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                            <Icon 
                                color='brand.100' 
                                as={CiCircleList} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                            <Icon 
                                color='brand.100' 
                                as={BsEmojiSmile} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                            <Icon 
                                color='brand.100' 
                                as={AiOutlineSchedule} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                            <Icon 
                                color='brand.100' 
                                as={CiLocationOn} 
                                fontSize={20} 
                                cursor='pointer'
                                _hover={{bgColor:'blue.800'}}
                                onClick={() => console.log('hi')}
                            />
                        </Stack>
                        <Flex>
                            <Button 
                                color='brand.900' 
                                bg='brand.100' 
                                borderRadius='full'
                                opacity={tweetText === '' ? '0.6' : '1'}
                            >Tweet</Button>
                        </Flex> 
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default CreateTweet;
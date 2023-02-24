import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { authModalState } from '../atoms/authAtom';
import AuthModal from './AuthModal';
import {useSetRecoilState} from 'recoil'


type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    const setModalState = useSetRecoilState(authModalState)

    //When the footer dismounts we want to set the modal state to false
    React.useEffect(() => {
        return () => {
            setModalState(prev => ({
                ...prev,
                open:false
            }))
        }
    },[])

    return (
        <Flex width='100%' bgColor='brand.100' height='72px' position='fixed' justify='center' bottom={0}>
            <Flex m='12px 0px' maxWidth='70%' flexGrow={1} justify='center'>
                <Flex 
                    maxWidth='275px' 
                    flexGrow={1}
                    display={{base:'none',lg:'flex'}}
                ></Flex>
                <Flex justify='space-between' align='center' flexGrow={1}>
                    <Flex align='flex-start' direction='column' display={{base:'none',md:'flex'}}>
                        <Text fontSize='23px' fontWeight={600} color='white'>Don't miss what's happening</Text>
                        <Text fontSize='15px' color='white'>People on Twitter are the first to know.</Text>
                    </Flex>
                    <Flex flexGrow={1} maxWidth={{base:'100%',md:'200px'}} align='center'>
                        <Button 
                            height='34px' 
                            width='50%' 
                            mr={2} 
                            borderRadius='full' 
                            border='1px solid white' 
                            background='brand.100' 
                            color='white'
                            _hover={{opacity:'0.8'}}
                            onClick={() => setModalState({
                                open:true,
                                view:'login'
                            })}
                        >Log in</Button>
                        <Button 
                            height='34px' 
                            width='50%' 
                            borderRadius='full' 
                            _hover={{opacity:'0.8'}}
                            onClick={() => setModalState({
                                open:true,
                                view:'signup'
                            })}
                        >Sign up</Button>  
                    </Flex>           
                </Flex>
            </Flex>
            <AuthModal />
        </Flex>
    )
}
export default Footer;
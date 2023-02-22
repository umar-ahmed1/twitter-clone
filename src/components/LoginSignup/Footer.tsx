import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import AuthModal from './AuthModal';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    const [isOpen,setIsOpen] = React.useState()

    return (
        <Flex width='100%' bgColor='brand.100' height='72px' position='fixed' justify='center' bottom={0}>
            <Flex m='12px 0px' maxWidth='70%' flexGrow={1} justify='center'>
                <Flex 
                    maxWidth='275px' 
                    flexGrow={1}
                    display={{md:'none',lg:'flex'}}
                ></Flex>
                <Flex justify='space-between' align='center' flexGrow={1}>
                    <Flex align='flex-start' direction='column' display={{base:'none',md:'flex'}}>
                        <Text fontSize='23px' fontWeight={600} color='white'>Don't miss what's happening</Text>
                        <Text fontSize='15px' color='white'>People on Twitter are the first to know.</Text>
                    </Flex>
                    <Flex flexGrow={1} maxWidth={{base:'100%',md:'200px'}}>
                        <Button width='50%'>Log in</Button>
                        <Button width='50%'>Sign up</Button>  
                    </Flex>           
                </Flex>
            </Flex>
            <AuthModal />
        </Flex>
    )
}
export default Footer;
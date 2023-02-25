import { auth } from '@/firebase/clientApp';
import { Button, Flex, Text,Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../atoms/authAtom';
import GoogleButton from './GoogleButton';

type SignUpComponentProps = {
    
};

const SignUpComponent:React.FC<SignUpComponentProps> = () => {
    const [modalState,setModalState] = useRecoilState(authModalState)
    
    return (
        <Flex pt='12px' direction='column' align='flex-start'>
            <Text fontSize='20px' p='12px 16px' color='brand.900'>New to Twitter?</Text>
            <Text fontSize='13px' p='0px 12px' color='brand.700'>Sign up now to get your own personalized timeline!</Text>
            <Flex align='center' justify='flex-start' p='8px 10px' width='95%'>
                <GoogleButton/>
            </Flex>
            <Flex align='center' justify='flex-start' p='8px 10px' width='95%'>
                <Button width='100%' bg='white' mb={1}  borderRadius='full' onClick={() => setModalState({
                    open:true,
                    view:'create account'
                })}>
                    <Text mr={4}>Create Account</Text>
                </Button>
            </Flex>
            
            <Text fontSize='13px' p='0px 12px' color='brand.700'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</Text>
        </Flex>
    )
}
export default SignUpComponent;
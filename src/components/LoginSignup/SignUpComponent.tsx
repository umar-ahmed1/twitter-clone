import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type SignUpComponentProps = {
    
};

const SignUpComponent:React.FC<SignUpComponentProps> = () => {
    
    return (
        <Flex pt='12px' direction='column'>
            <Text fontSize='20px' p='12px 16px' color='brand.900'>New to Twitter?</Text>
            <Text fontSize='13px' p='0px 12px' color='brand.700'>Sign up now to get your own personalized timeline!</Text>
            <Text fontSize='13px' p='0px 12px' color='brand.700'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</Text>
        </Flex>
    )
}
export default SignUpComponent;
import { Flex, Divider,Text } from '@chakra-ui/react';
import React from 'react';
import GoogleButton from './GoogleButton';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    return (
        <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column' pl='32px' pr='32px'>
            <Text fontSize='31px' color='brand.900' fontWeight={600} mb={3}>
                {'Sign in to Twitter'}
            </Text>
            <GoogleButton/>
            <Flex width='100%' align='center'>
                <Divider borderColor='white' />
                <Text p={3} color='brand.900'>or</Text>
                <Divider />
            </Flex>
            <Text></Text>
        </Flex>


    )
}
export default Login;
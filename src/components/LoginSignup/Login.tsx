import { Flex, Divider,Text, Input, Button } from '@chakra-ui/react';
import React from 'react';
import GoogleButton from './GoogleButton';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
    const [signInWithEmailAndPassword,userCred,loading,error] = useSignInWithEmailAndPassword(auth)
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleSubmit = () => {
        signInWithEmailAndPassword(email,password)
    }

    return (
        <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column'>
            <Text fontSize='31px' color='brand.900' fontWeight={600} mb={3}>
                {'Sign in to Twitter'}
            </Text>
            <GoogleButton/>
            <Flex width='100%' align='center'>
                <Divider borderColor='white' />
                <Text p={3} color='brand.900'>or</Text>
                <Divider />
            </Flex>
            <Input 
                type='text' 
                width='100%' 
                height='100%'  
                color='brand.900' 
                fontSize='17px' 
                p='16px 8px 16px 8px'
                m='12px 0px'
                placeholder="Email" 
                border='1px solid'
                borderColor='brand.700'
                 _placeholder={{color:'brand.700'}}
                 _focus={{boxShadow:'none'}}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                ></Input>
                <Input 
                    type='password' 
                    width='100%' 
                    height='100%'  
                    color='brand.900' 
                    fontSize='17px' 
                    p='16px 8px 16px 8px'
                    m='12px 0px'
                    placeholder="Password" 
                    border='1px solid'
                    borderColor='brand.700'
                    _placeholder={{color:'brand.700'}}
                    _focus={{boxShadow:'none'}}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></Input>
                <Button mt={4} width='100%' bg='white' mb={4}  borderRadius='full' onClick={handleSubmit} _hover={{opacity:'0.9'}}>
                    <Text mr={4}>Login</Text>
                </Button>
                <Button mt={4} width='100%' bg='black' border='1px solid' borderColor='brand.900' color='brand.900' mb={4}  borderRadius='full' _hover={{opacity:'0.9'}}>
                    <Text mr={4}>Forgot Password?</Text>
                </Button>

        </Flex>


    )
}
export default Login;
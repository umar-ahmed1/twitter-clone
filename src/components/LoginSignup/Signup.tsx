import { Flex, Divider ,Text, Button} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../atoms/authAtom';
import GoogleButton from './GoogleButton';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const [modalState,setModalState] = useRecoilState(authModalState)
    return (
        <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column' pl='16px' pr='16px'>
            <Text fontSize='31px' color='brand.900' fontWeight={600} mb={3}>
                {'Join Twitter today'}
            </Text>
            <GoogleButton/>
            <Flex width='100%' align='center'>
                <Divider borderColor='white' />
                <Text p={3} color='brand.900'>or</Text>
                <Divider />
            </Flex>
            <Button width='100%' bg='white' mb={1}  borderRadius='full' onClick={() => setModalState({
                    open:true,
                    view:'create account'
                })}>
                <Text mr={4}>Create Account</Text>
            </Button>
            <Text></Text>
        </Flex>


    )
}
export default Signup;
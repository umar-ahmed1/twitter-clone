import React from 'react';
import { authModalState } from '../atoms/authAtom'
import { useRecoilState} from 'recoil'
import { Flex } from '@chakra-ui/react';
import Login from './Login'
import Signup from './Signup'


type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const [modalState,setModalState] = useRecoilState(authModalState)

    return (
        <Flex direction='column' align='center' width='100%' mt={4}>
            {modalState.view === 'login' && <Login/>}
            {modalState.view === 'signup' && <Signup/>}
        </Flex>

    )
}
export default AuthInputs;
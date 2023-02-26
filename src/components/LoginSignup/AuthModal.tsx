import { Button, Divider, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil'
import { BsTwitter } from 'react-icons/bs';
import { auth } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authModalState } from '../atoms/authAtom';
import AuthInputs from './AuthInputs';

type AuthModalProps = {

};

const AuthModal: React.FC<AuthModalProps> = () => {
    const [modalState,setModalState] = useRecoilState(authModalState)
    const [user] = useAuthState(auth)

    //function to set the modal state to close
    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    //only close the modal when user variable changes
    React.useEffect(()=>{
        if(user){
            handleClose()
        }
    },[user])


    return (
        <Modal isOpen={modalState.open} onClose={handleClose} size={{base:'full',md:'2xl'}} variant='dark'>
            <ModalOverlay bg='whiteAlpha.100'/>
            <ModalContent top={{base:'0rem',md:'4.5rem'}}>
                <ModalHeader bg='black' height='268px'>
                    <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column'>
                        <Icon as={BsTwitter} fontSize='31px' color='brand.900'/>
                    </Flex>  
                </ModalHeader>
                <ModalCloseButton color='brand.900'/>
                <ModalBody bg='black'>
                    <AuthInputs/>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default AuthModal;
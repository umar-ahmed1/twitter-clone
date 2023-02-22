import { Button, Divider, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { authState } from '../atoms/authAtom';
import {useRecoilState} from 'recoil'
import { BsTwitter } from 'react-icons/bs';
import Login from './Login';

type AuthModalProps = {

};

const AuthModal: React.FC<AuthModalProps> = () => {
    const [modalState,setModalState] = useRecoilState(authState)
    console.log(modalState)

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open:false
        }))
    }

    return (
        <Modal isOpen={modalState.open} onClose={handleClose} size='xl' variant='dark'>
            <ModalOverlay bg='whiteAlpha.100'/>
            <ModalContent top='4.5rem'>
                <ModalHeader bg='black' height='268px'>
                    <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column'>
                        <Icon as={BsTwitter} fontSize='31px' color='brand.900'/>
                    </Flex>  
                </ModalHeader>
                <ModalCloseButton color='brand.900'/>
                <ModalBody bg='black' pl='122px' pr='122px'>
                    {modalState.view === 'login' && <Login/>}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default AuthModal;
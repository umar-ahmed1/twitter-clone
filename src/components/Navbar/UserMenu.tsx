import { auth, firestore } from '@/firebase/clientApp';
import { Menu, MenuButton,Text, Button, MenuList, MenuItem, Flex, Icon } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { authModalState } from '../atoms/authAtom';

type UserMenuProps = {
    user?: User
};




const UserMenu: React.FC<UserMenuProps> = ({user}) => {
    const [identifier,setIdentifier] = React.useState('')

    const logout = async () => {
        await signOut(auth)
    }

    //get the users username
    const getUserIdentifier = async () => {
        try{
            const userRef = doc(firestore,'users',user?.uid!)
            const userDoc = await getDoc(userRef)
            const data = userDoc.data()
            setIdentifier(data?.identifier)
        } catch(error:any){
            console.log('getUserIdentifier error',error.message)
        }
    }
    
    //everytime the user menu loads we want to get the user's username (identifier)
    React.useEffect(() => {
        if(user){
            getUserIdentifier()
        }
    },[user])

    return (
        <Menu placement='top'>
            <MenuButton 
                cursor='pointer'
                _hover={{ bg: 'whiteAlpha.200' }}
                p='12px'
                borderRadius='full'
                width='100%'>
                <Flex 
                    align='center'
                    justify='space-between'
                    width='100%'
                >
                    <Flex mr={4}>
                        <Icon as={AiOutlineUser} fontSize={40} mr={1} color='brand.900'/>
                        <Flex direction='column' align='flex-start' display={{base:'none',lg:'flex'}}>
                            <Text fontWeight={600} fontSize='15px' color='brand.900'>{user?.displayName || user?.email?.split('@')[0]}</Text>
                            <Text color='brand.700' fontSize='15px'>@{identifier || user?.email?.split('@')[0]}</Text> 
                        </Flex>
                    </Flex>
                    <Flex display={{base:'none',lg:'flex'}}>
                        <Icon as={BsThreeDots} color='brand.900'/>   
                    </Flex>   
                </Flex>
            </MenuButton>
            <MenuList bg='black' border='1px solid red'>
                <MenuItem 
                bg='black' 
                fontSize='15px' 
                color='brand.900' 
                fontWeight={600}
                _hover={{ bg: 'whiteAlpha.200' }}
                >   Add an existing account
                </MenuItem>
                <MenuItem 
                    bg='black' 
                    fontSize='15px' 
                    color='brand.900' 
                    fontWeight={600}
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={logout}
                >   Log out @{identifier || user?.email?.split('@')[0]} 
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
export default UserMenu;
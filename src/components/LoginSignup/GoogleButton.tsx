import { auth, firestore } from '@/firebase/clientApp';
import { Flex, Button, Image, Text } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';




const GoogleButton:React.FC = () => {
    const [signInWithGoogle,userCredentials,loading,error]= useSignInWithGoogle(auth)

    //take the user from signinwithgoogle and create a document in the collections with all the user data
    const createUser = async (user: User) => {
        const userDocRef = doc(firestore,'users',user.uid)
        await setDoc(userDocRef, user)
    }

    //everytime usercredentials change from signinwithgoogle then run create user
    React.useEffect(() => {
        if(userCredentials){
            createUser(JSON.parse(JSON.stringify(userCredentials.user)))
        }

    },[userCredentials])


    return (
        <Flex direction="column" width="100%" mb={4}>
            <Button bg='white' mb={2} isLoading={loading} borderRadius='full' onClick={() => signInWithGoogle()}>
                <Text mr={4}>Continue with Google</Text>
                <Image height="20px" src="/images/googlelogo.png" ></Image>
            </Button>
            {error && <Text color='brand.900'>{error.message}</Text>}

        </Flex>

    )
}
export default GoogleButton;
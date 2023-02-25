import { firestore } from '@/firebase/clientApp';
import { Flex, Input, Stack, Select, Button,Text, InputGroup, InputLeftElement, Alert, AlertIcon } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { collection, doc, Firestore, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React from 'react';
import { UserDetails } from './CreateAccount';

type Step2Props = {
    step:number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    signUpForm: UserDetails,
    setSignUpForm: React.Dispatch<React.SetStateAction<UserDetails>>
};

const Step2:React.FC<Step2Props> = ({step,setStep,signUpForm,setSignUpForm}) => {
    const [loading,setLoading] = React.useState(false)
    const [errorMessage,setErrorMessage] = React.useState('')

    const handleSubmit = async () => {
        setLoading(true)
        setErrorMessage('')
        try{
            //get all the users with the same identifier as the one in the form
            const userQuery = query(collection(firestore,'users'),
                where('identifier','==',signUpForm.identifier)
            )
            const userDoc = await getDocs(userQuery)
            const users = userDoc.docs.map((doc) => ({id: doc.id,...doc.data()}))
            //if there are any users with the same identifier then the users.length will be greater than 0 so that means we should return
            if (users.length > 0){
                setErrorMessage('Username is taken')
            } 
            //else increment step by 1 because the username is valid
            else {
                setStep(step + 1)
            }


        }catch(error:any){
            console.log('createUser error',error.message)
        }
        setLoading(false)
    }

    return (
            <>
            <Text fontSize='31px' color='brand.900' fontWeight={600} mt={2} mb={3}>
                {'What should we call you?'}
            </Text>
            <Text fontSize='15px' color='brand.700' mb={3}>
                {'Your @username is unique. You can always change it later.'}
            </Text>
            <InputGroup width='100%' pl='10px' mb={3}>
                <InputLeftElement pointerEvents='none' color='brand.100' fontSize='20px' fontWeight={600} left={0} children='@' ml='16px' mt='5px'></InputLeftElement>
                <Input 
                    type='text' 
                    width='100%' 
                    color='brand.900' 
                    fontSize='17px' 
                    placeholder="Username" 
                    border='1px solid'
                    height='50px'
                    borderColor='brand.700'
                    _placeholder={{color:'brand.700'}}
                    _focus={{boxShadow:'none'}}
                    value={signUpForm.identifier}
                    onChange={(event) => {setSignUpForm(prev => ({
                        ...prev,
                        identifier:event.target.value
                    }))}}
                ></Input>
            </InputGroup>
            {errorMessage && (
                <Alert status='error'>
                    <AlertIcon />
                    {errorMessage}
                </Alert>
                )}
                <Button isLoading={loading} width='100%' bg='white' mb={4} mt={7}  borderRadius='full' onClick={handleSubmit}>
                    <Text mr={4}>Next</Text>
                </Button>
            </>  
    )
}
export default Step2;
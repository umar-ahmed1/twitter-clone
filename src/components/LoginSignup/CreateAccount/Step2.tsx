import { firestore } from '@/firebase/clientApp';
import { Flex, Input, Stack, Select, Button,Text, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React from 'react';
import { UserDetails } from './CreateAccount';

type Step1Props = {
    step:number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    signUpForm: UserDetails,
    setSignUpForm: React.Dispatch<React.SetStateAction<UserDetails>>
};

const Step1:React.FC<Step1Props> = ({step,setStep,signUpForm,setSignUpForm}) => {

    const handleSubmit = async () => {
        try{
            //Create a reference to the firebase doc of the username given and get the document
            const userRef = doc(firestore,'users',signUpForm.username)
            const userDoc = await getDoc(userRef)
            //if taken display that its taken and suggest usernames
            if (userDoc.exists()){
                console.log('user already exists')
            } 
            //else create the document and increment step by 1 
            else {
                setDoc(userRef,signUpForm)
                setStep(step + 1)
            }
            


        }catch(error:any){
            console.log('createUser error',error.message)
        }

            
    }

    return (
            <>
            <Text fontSize='31px' color='brand.900' fontWeight={600} mt={2} mb={3}>
                {'What should we call you?'}
            </Text>
            <Text fontSize='15px' color='brand.700' mb={3}>
                {'Your @username is unique. You can always change it later.'}
            </Text>
            <InputGroup width='100%' pl='10px' mb={10}>
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
                    value={signUpForm.username}
                    onChange={(event) => {setSignUpForm(prev => ({
                        ...prev,
                        username:event.target.value
                    }))}}
                ></Input>
            </InputGroup>
                <Button width='100%' bg='white' mb={4}  borderRadius='full' onClick={handleSubmit}>
                    <Text mr={4}>Next</Text>
                </Button>
            </>  
    )
}
export default Step1;
import { Button, Flex,Input,Select,Stack,Text } from '@chakra-ui/react';
import React from 'react';
import Step1 from './Step1';

type CreateAccountProps = {
    
};

export type UserDetails = {
    displayName:string,
    email:string,
    birthMonth:string,
    birthDay:string,
    birthYear:string,
}

const CreateAccount:React.FC<CreateAccountProps> = () => {
    const [step,setStep] = React.useState(1)
    const [signUpForm,setSignUpForm] = React.useState({
        displayName:'',
        email:'',
        birthMonth:'',
        birthDay:'',
        birthYear:'',
    } as UserDetails)
    
    return (
        <Flex width='100%' align='center' justify='center' backgroundColor='black' direction='column' pl='5px' pr='5px'>
            <Text fontWeight={600} color='brand.900'>Step {step} of 5</Text>
            {step === 1 && (<Step1 step={step} setStep = {setStep} signUpForm={signUpForm} setSignUpForm={setSignUpForm}/>)}
            
        
        </Flex>


    )
}
export default CreateAccount;
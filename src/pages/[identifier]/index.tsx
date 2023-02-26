import PageContent from '@/components/Layout/PageContent';
import { UserDetails } from '@/components/LoginSignup/CreateAccount/CreateAccount';
import Footer from '@/components/LoginSignup/Footer';
import SignUpComponent from '@/components/LoginSignup/SignUpComponent';
import { auth, firestore } from '@/firebase/clientApp';
import { Flex, Text } from '@chakra-ui/react';
import { collection,getDocs, query, where } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './Header';

type indexProps = {
    userData: UserDetails
};

const index:React.FC<indexProps> = ({userData}) => {
    const [user] = useAuthState(auth)
    console.log(userData)
    return (
        <>
        <PageContent>
          <Flex direction='column'>
            <Header userData={userData}/>
          </Flex>
          <>
          {!user && <SignUpComponent/>}
          </>
        </PageContent>
        {!user && <Footer/>}
        </>
      )
}
export default index;


//Load the user and their profile details on the server side
export async function getServerSideProps(context: GetServerSidePropsContext){
    try{
        const userQuery = query(collection(firestore,'users'),
                where('identifier','==',context.query.identifier as string)
            )
            const userDoc = await getDocs(userQuery)
            const user = userDoc.docs.map((doc) => ({id: doc.id,...doc.data()}))
        return {
            //return the user data as a prop for the page
            props:{
                userData: user ? user[0] : ''
            },
        }
    } catch(error:any){
        console.log('server side props error user page',error.message)
    }
}
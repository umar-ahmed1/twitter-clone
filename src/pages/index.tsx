import Footer from '@/components/LoginSignup/Footer'
import SignUpComponent from '@/components/LoginSignup/SignUpComponent'
import { auth } from '@/firebase/clientApp'
import { Flex, Text} from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import PageContent from '../components/Layout/PageContent'
import CreateTweet from '../components/MiddleSection/CreateTweet'
import HomeMenu from '../components/MiddleSection/HomeMenu'

export default function Home() {
  const [user] = useAuthState(auth)
  return (
    <>
    <PageContent>
      <Flex direction='column'>
        <HomeMenu/>
        <CreateTweet/>
      </Flex>
      <>
      {!user && <SignUpComponent/>}
      </>
    </PageContent>
    {!user && <Footer/>}
      </>
  )
}

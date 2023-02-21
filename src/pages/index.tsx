import Footer from '@/components/LoginSignup/Footer'
import SignUpComponent from '@/components/LoginSignup/SignUpComponent'
import { Flex, Text} from '@chakra-ui/react'
import React from 'react'
import PageContent from '../components/Layout/PageContent'
import CreateTweet from '../components/MiddleSection/CreateTweet'
import HomeMenu from '../components/MiddleSection/HomeMenu'

export default function Home() {
  return (
    <>
    <PageContent>
      <Flex direction='column'>
        <HomeMenu/>
        <CreateTweet/>
      </Flex>
      <>
      <SignUpComponent/>
      </>
    </PageContent>
    <Footer/>
      </>
  )
}

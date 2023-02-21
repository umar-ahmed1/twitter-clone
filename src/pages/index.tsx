import { Flex, Text} from '@chakra-ui/react'
import React from 'react'
import PageContent from './components/Layout/PageContent'
import CreateTweet from './components/CreateTweet/CreateTweet'
import HomeMenu from './components/CreateTweet/HomeMenu'

export default function Home() {
  return (
      <PageContent>
        <>
          <HomeMenu/>
          <CreateTweet/>
        </>
        <>
          <Flex width='600px'>

          </Flex>
        </>
      </PageContent>
  )
}

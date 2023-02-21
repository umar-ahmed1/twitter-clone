import { Flex, Text} from '@chakra-ui/react'
import React from 'react'
import PageContent from './components/Layout/PageContent'
import CreateTweet from './components/MiddleSection/CreateTweet'
import HomeMenu from './components/MiddleSection/HomeMenu'

export default function Home() {
  return (
      <PageContent>
        <Flex>
          <HomeMenu/>
          <CreateTweet/>
        </Flex>
        <>
          <Flex>

          </Flex>
        </>
      </PageContent>
  )
}

import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';

type PageContentProps = {
    children: any;
};

const PageContent:React.FC<PageContentProps> = ({children}) => {
    //the children are the LHS and RHS react fragments
    return (
        <Flex justify='center' width='100%'>
            <Navbar/>
            <Flex width={{base:'100%',sm:'69%'}} justify='flex-start'>
                {/*LHS*/}
                <Flex 
                    direction='column' 
                    width={{base:'100%',md:'65%'}}
                    mr={{base:0,md:6}}
                    border='1px solid #2F3336'
                    maxWidth='600px'
                >
                    {children && children[0 as keyof typeof children]}
                </Flex>
                {/*RHS*/}
                <Flex 
                    direction='column' 
                    display={{base:'none',md:'flex'}}
                    flexGrow={1}
                    border='1px solid #2F3336'
                    maxWidth='350px'
                >
                    {children && children[1 as keyof typeof children]}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;
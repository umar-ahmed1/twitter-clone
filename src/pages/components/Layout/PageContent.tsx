import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    children: any;
};

const PageContent:React.FC<PageContentProps> = ({children}) => {
    //the children are the LHS and RHS react fragments
    return (
        <Flex justify='center' flexGrow={1} padding='16px 0px' border='1px solid grey'>
            {/*LHS*/}
            <Flex 
                direction='column' 
                width={{base:'100%',md:'65%'}}
                mr={{base:0,md:6}}
                border='1px solid green'
            >
                {children && children[0 as keyof typeof children]}
            </Flex>
            {/*RHS*/}
            <Flex 
                direction='column' 
                display={{base:'none',md:'flex'}}
                border='1px solid yellow'
            >
                {children && children[1 as keyof typeof children]}
            </Flex>
        </Flex>
    )
}
export default PageContent;
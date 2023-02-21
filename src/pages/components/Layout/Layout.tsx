import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout:React.FC<LayoutProps> = ({children}) => {
    return (
        <>  
        <Flex>
            <Navbar/>
            <main>
                {children}
            </main>
        </Flex> 
        </>
    )
}
export default Layout;
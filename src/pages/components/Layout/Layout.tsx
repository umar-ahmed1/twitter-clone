import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout:React.FC<LayoutProps> = ({children}) => {
    return (
        <>  
        <main>
            {children}
        </main> 
        </>
    )
}
export default Layout;
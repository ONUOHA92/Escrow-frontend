import React from 'react';
import Navbar from './nav';
import Footer from './footer';



const Layout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
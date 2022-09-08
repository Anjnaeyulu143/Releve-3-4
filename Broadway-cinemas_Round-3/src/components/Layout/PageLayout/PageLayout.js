import React from 'react';
import Navbar from "../Navbar/Navbar"

const PageLayout = ({children}) => {
    return (  
        <div>
            <Navbar />
            <div style={{width:'85%', margin:'auto'}}>
                {children}
            </div>
        </div>
    );
}
 
export default PageLayout;
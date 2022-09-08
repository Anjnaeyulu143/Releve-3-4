import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/images/logo.png';
import { Box, Container } from '@material-ui/core';

const Navbar = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Box display='flex' alignItems='center' padding="0.4em 0">
                    <Box marginRight='1em'>
                        <img src={Logo} alt='logo' width="50px" />
                    </Box>
                    <Box color='white'>
                        <h3>Broadway Cinemas</h3>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
 
export default Navbar;
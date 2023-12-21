import { useContext, useState } from 'react';
import styles from './main-navigation.module.css';
import { UserContext } from '../utils/contexts/userContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { currentUser, setSidebarIsOpen, sidebarIsOpen } = useContext(UserContext);


    const sideBarToggle = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    return (
        <nav

            className={styles.navbar}>


            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.hambur} onClick={sideBarToggle}>
                        <GiHamburgerMenu size={24} />
                    </div>
                    <div className={styles.logo}>
                        <Link to="/" >
                            <img src="https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
                        </Link>
                    </div>
                </div>
                <div className={styles.userContainer}>
                    <img src={currentUser.photoURL} alt="User Image" className={styles.userImage} />
                    {/* Add dropdown for user actions, if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
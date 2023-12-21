import { FaRegCompass as Compass } from "react-icons/fa";
import { LuLayoutDashboard as Layout } from "react-icons/lu";
import styles from './sidebar.module.css';
import SidebarItem from './sidebarItem';
const SideBar = () => {
    const guestRoutes = [
        {
            icon: <Layout />,
            label: "Dashboard",
            href: "/",
        },
        {
            icon: <Compass />,
            label: "Browse",
            href: "/search",
        },
    ];
    return (
        <nav className={styles.sidebar}>
            <div className={styles.logo}>
                {/* Insert your logo or brand text here */}
            </div>
            <ul className={styles.menu}>
                {/* Add your menu items here */}
                <li className={styles.menuItem}>Item 1</li>
                <li className={styles.menuItem}>Item 2</li>
                <li className={styles.menuItem}>Item 3</li>
                {/* ... */}
            </ul>
        </nav>
    );
}

export default SideBar;
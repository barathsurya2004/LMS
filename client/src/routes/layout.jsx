import Navbar from "../components/mainHeader";
import SideBar from "../components/sidebar"
import { useContext } from "react";
import { UserContext } from "../utils/contexts/userContext";

const Layout = () => {
    const { sidebarIsOpen } = useContext(UserContext);
    return (
        <>
            <Navbar />
            {sidebarIsOpen && <SideBar />}
        </>
    )
}

export default Layout;
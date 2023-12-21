import { UserContext } from "../utils/contexts/userContext";
import { useContext } from 'react';
import Layout from "./layout";

const DashBoard = () => {

    const { currentUser } = useContext(UserContext)




    return (
        <>
            {currentUser ? <Layout /> :
                <h1>You are not signed in</h1>
            }
        </>
    )
}


export default DashBoard;
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Link to="/user-profile" className=" flex bg-white font-bold items-center hover:text-orange-500">User Profile</Link>
            <Button onClick={() => logout()} className="flex font-bold items-center hover:text-gray-500 px-3">
                LogOut
            </Button>
        </>
    )
}

export default MobileNavLinks;
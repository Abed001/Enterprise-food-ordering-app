
import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 hover:text-orange-500 font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="flex-col gap-2 text-center items-center">
                    <Link className="font-bold hover:text-orange-500" to="/user_profile" >User profile</Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <button onClick={()=>logout()} className="justify-center flex flex-1 font-bold hover:text-orange-500">Log Out</button>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;
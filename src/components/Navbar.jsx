import { FaHome } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
const Navbar=()=>{
    return(
        <nav className="navbar">
            <a href="#Homeid"><FaHome/></a>
            <a href="#Projectid"><AiOutlineFundProjectionScreen/></a>
            <a href="#Skillsid"><ImBooks/></a>
            <a href="#Contactid"><TbMessage/></a>
        </nav>
    )
}
export default Navbar;
import { FaHome } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        activeClass="active"
        to="Homeid"
        spy={true}
        smooth={true}
        offset={-70} // Adjust offset for potential navbar height
        duration={500} // Customize scrolling duration (milliseconds)
      >
        <FaHome />
      </Link>
      <Link
        activeClass="active"
        to="Projectid"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <AiOutlineFundProjectionScreen />
      </Link>
      <Link
        activeClass="active"
        to="Skillsid"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <ImBooks />
      </Link>
      <Link
        activeClass="active"
        to="Contactid"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <TbMessage />
      </Link>
      {/* ... similar links for other sections */}
    </nav>
    // <nav className="navbar">
    //     <a href="#Homeid"><FaHome/></a>
    //     <a href="#Projectid"><AiOutlineFundProjectionScreen/></a>
    //     <a href="#Skillsid"><ImBooks/></a>
    //     <a href="#Contactid"><TbMessage/></a>
    // </nav>
  );
};
export default Navbar;

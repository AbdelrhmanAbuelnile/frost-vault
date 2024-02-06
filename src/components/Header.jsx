import { FaRegBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import logo from '../assets/logo.svg'


function Header() {
  const location = useLocation();
  return (
    <div  className='bg-secondaryDarkLead/30 w-full py-7 px-20 flex flex-row justify-between gap-52 items-center relative z-10'>
    <img src={logo} alt="logo" width={60} />
    <div className="text-white flex flex-row justify-center items-center gap-2.5 ">
      <FaRegBell className="text-xl text-white font-semibold"/>
      <div className="flex flex-row gap-2.5 justify-center items-center">
        <IoPersonSharp />
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="font-bold">Admin</h3>
          <Link to={"/"} className="text-primaryViolet text-xs font-bold">Workspace Settings</Link>
        </div>
      </div>
    </div>
</div>
  )
}

export default Header
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { PiPackageFill } from "react-icons/pi";
import { MdOutlineInsertChart } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  return (
    <div  className='bg-secondaryDarkLead/30 w-full py-3 md:py-7 px-5 md:px-20 flex flex-row justify-between gap-52 items-center relative z-10'>
      <img src={logo} alt="logo" width={60} />


      <div className="flex flex-row justify-center gap-9 items-center">
        <Link to={'/'} className="text-secondary text-2xl hidden largelaptop:hidden md:block" >Reports</Link>
        <Link to={'/customers'} className="text-secondary text-2xl hidden largelaptop:hidden md:block" >Customers</Link>
        <Link to={'/orders'} className="text-secondary text-2xl hidden largelaptop:hidden md:block" >orders</Link>
        <IoPersonSharp className="text-white text-xl cursor-pointer"/>
        <span className="lg:hidden">
        {
          !isOpen ?
          <GiHamburgerMenu className="text-xl text-white" onClick={()=> setIsOpen(!isOpen)} />
          :
          <IoMdClose className="text-xl text-white" onClick={()=> setIsOpen(!isOpen)} />
        }
        </span>
        {
          isOpen && 
          <div className="absolute z-[99999999] top-20 right-10 bg-secondaryDarkLead p-4 rounded-md flex flex-col gap-4">
            <Link to={'/'} className="text-secondary text-2xl flex gap-2 items-center" ><MdOutlineInsertChart /> Reports</Link>
            <Link to={'/customers'} className="text-secondary text-2xl flex gap-2 items-center" ><FaPeopleCarry />Customers</Link>
            <Link to={'/orders'} className="text-secondary text-2xl flex gap-2 items-center" ><PiPackageFill />orders</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header
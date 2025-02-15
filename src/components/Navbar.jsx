import { AiOutlineSlack } from "react-icons/ai";
import { TbCategory, TbCloudUpload } from "react-icons/tb";
import { FaRegUser, FaRegMap } from "react-icons/fa";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { GrBarChart } from "react-icons/gr";
import { IoOptionsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-[#1C2A35] text-white min-h-screen fixed w-[80px]">
      <div className="cursor-pointer">
        {/* three dot */}
        <div className="flex justify-center items-center space-x-2 h-20">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        {/* menu icons */}
        <div className="flex flex-col justify-center items-center space-y-10 text-4xl text-gray-500 cursor-pointer">
          <NavLink to={"/"}>
            <AiOutlineSlack className="text-yellow-500" />
          </NavLink>
          <NavLink to={"/task"}>
            <TbCategory size={30} />
          </NavLink>
          <NavLink>
            <FaRegUser size={30} />
          </NavLink>
          <NavLink>
            <BsClipboard2PulseFill size={30} />
          </NavLink>
          <NavLink>
            <GrBarChart size={30} strokeWidth={3} />
          </NavLink>
          <NavLink>
            <TbCloudUpload size={30} />
          </NavLink>
          <NavLink>
            <FaRegMap size={30} />
          </NavLink>
          <NavLink>
            <IoOptionsOutline size={30} />
          </NavLink>
        </div>
      </div>
      {/* signout icons */}
      <div className="flex justify-center items-center cursor-pointer hover:text-red-500 mt-[300px]">
        <PiSignOut size={30} />
      </div>
    </div>
  );
}

export default Navbar;

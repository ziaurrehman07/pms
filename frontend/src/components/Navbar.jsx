import { CgProfile } from "react-icons/cg";

import { RiArrowDropDownLine } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <div className=" sticky top-0   flex justify-between h-12 w-[90%]  bg-inherit m-4 rounded-sm place-items-center p-5 ">
        <div className="cursor-pointer">
          <h2 className="font-medium text-sm">Hello, Faizan Baig</h2>
          <p className="text-xs text-gray-500 ">Have a nice Day</p>
        </div>
        <div className="flex place-items-center">
          <div>
            <CgProfile className="text-[34px] cursor-pointer text-gray-300 mr-3" />
          </div>
          <div className="flex place-items-center">
            <div className=" cursor-pointer">
              <h2 className="font-medium text-sm">Faizan Baig</h2>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            <div>
              <RiArrowDropDownLine className="cursor-pointer ml-4 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

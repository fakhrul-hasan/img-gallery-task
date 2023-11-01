import { BiSolidCheckSquare } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-3 border-b">
          <div className="flex items-center gap-1">
            <BiSolidCheckSquare className="text-2xl text-checkColor" />
            <h5 className="capitalize font-semibold text-xl">
              3 files selected
            </h5>
          </div>
          <button className="text-orange-600 font-medium hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg hover:transition-all hover:duration-300 transition-all duration-300">
            Delete files
          </button>
        </div>
    );
};

export default Navbar;
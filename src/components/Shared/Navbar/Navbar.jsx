import Swal from "sweetalert2";
import { BiSolidCheckSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeImage } from "../../../redux/feature/imagesSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const checked = useSelector(state=> state.imageData.checkbox)
  const handleDelete=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeImage());
        Swal.fire(
          'Deleted!',
          'Selected image has been deleted.',
          'success'
        )
      }
    })
  }

  const handleTitle=()=>{
    if(checked?.length > 0){
      return (
        <div className="flex items-center gap-1">
            <BiSolidCheckSquare className="text-2xl text-checkColor" />
            <h5 className="capitalize font-semibold text-xl">
              {checked?.length} files selected
            </h5>
          </div>
      )
    }else{
      return (
        <h5 className="capitalize font-semibold text-xl">
              Gallery
            </h5>
      )
    }
  }

    return (
        <div className="flex justify-between items-center px-5 py-3 border-b">
          {handleTitle()}
          <button onClick={handleDelete} className="text-orange-600 font-medium hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg hover:transition-all hover:duration-300 transition-all duration-300">
            Delete files
          </button>
        </div>
    );
};

export default Navbar;
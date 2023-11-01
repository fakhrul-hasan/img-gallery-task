import { BiImageAdd } from "react-icons/bi";
import image1 from '../../assets/images/image-1.webp';
import { useDispatch } from "react-redux";
import { addImage } from "../../redux/feature/imagesSlice";

const ImgSection = () => {
    const dispatch = useDispatch();
    const handleAddImage = async (e)=>{
        e.preventDefault();
        let files;
        if (e?.type === "drop" || e?.type === "dragover") {
            files = e.dataTransfer.files;
          } else {
            files = e.target.files;
          }
          if (files.length > 0) {
            dispatch(addImage(files[0]))
          }
    }
    return (
        <div className="grid grid-cols-5 gap-5 p-5">
            <div className='col-span-2 row-span-2 border rounded-lg relative group cursor-pointer'>
                <input type="checkbox" className="invisible group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4" />
                <img style={{ pointerEvents: '' }} src={image1} alt="" className='group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300' />
            </div>
            <div className='col-span-1 row-span-1 border rounded-lg relative group cursor-pointer'>
            <input type="checkbox" className="invisible group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4" />
                <img src={image1} alt="" className='group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300' />
            </div>
            <div className='col-span-1 row-span-1 border rounded-lg relative group cursor-pointer'>
            <input type="checkbox" className="invisible group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4" />
                <img src={image1} alt="" className='group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300' />
            </div>
            <div className='col-span-1 row-span-1 border rounded-lg relative group cursor-pointer'>
            <input type="checkbox" className="invisible group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4" />
                <img src={image1} alt="" className='group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300' />
            </div>
            <div className='col-span-1 row-span-1 border rounded-lg relative group cursor-pointer'>
            <input type="checkbox" className="invisible group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4" />
                <img src={image1} alt="" className='group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300' />
            </div>
            <div className='col-span-1 row-span-1 border rounded-lg cursor-pointer flex flex-col justify-center items-center gap-4' onDragOver={handleAddImage}
                onDrop={handleAddImage}
                onClick={() => {
                  const fileInput =
                    document.getElementById("primary-file-input");
                  fileInput.click();
                }}>
            <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    handleAddImage(e);
                  }}
                  id="primary-file-input"
                  className="hidden"
                />
                <BiImageAdd className="text-4xl" />
                <h5>Add Images</h5>
            </div>
        </div>
    );
};

export default ImgSection;
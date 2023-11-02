import { BiImageAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../redux/feature/imagesSlice";
import ImgCard from "../Shared/ImgCard/ImgCard";

const ImgSection = () => {
    const dispatch = useDispatch();
    const images = useSelector((state)=>state.imageData.images);
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
          {images?.map((img, index)=>(
            <ImgCard key={index} index={index} img={img} />
          ))}
            <div className='col-span-1 row-span-1 border rounded-lg cursor-pointer flex flex-col justify-center items-center gap-4 px-10 py-14' onDragOver={handleAddImage}
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
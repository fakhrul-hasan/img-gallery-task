import { useDispatch, useSelector } from "react-redux";
import { BiImageAdd } from "react-icons/bi";
import { addImage } from "../../redux/feature/imagesSlice";
import ImgCard from "../Shared/ImgCard/ImgCard";

const ImgSection = () => {
  const images = useSelector((state) => state.imageData.images);
  const dispatch = useDispatch();
  const handleAddImage = async (e) => {
    e.preventDefault();
    let files;
    if (e?.type === "drop" || e?.type === "dragover") {
      files = e.dataTransfer.files;
    } else {
      files = e.target.files;
    }
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      const data = {url: url, createdAt: new Date()}
      dispatch(addImage(data));
    }
  };

  return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5" >
            {images?.map((img, index) => (
              <ImgCard key={index} index={index} img={img} />
            ))}
            <div
              className="col-span-1 row-span-1 border rounded-lg flex flex-col justify-center items-center gap-4 lg:px-10 sm:py-10 md:py-5 lg:py-14"
              onDragOver={handleAddImage}
              onDrop={handleAddImage}
              onClick={() => {
                const fileInput = document.getElementById("primary-file-input");
                fileInput.click();
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleAddImage(e);
                }}
                id="primary-file-input"
                className="hidden"
              />
              <BiImageAdd className="text-xl sm:text-4xl" />
              <h5 className="text-sm sm:text-base">Add Images</h5>
            </div>
          </div>
  );
};

export default ImgSection;

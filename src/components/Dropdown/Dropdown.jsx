import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortImages } from "../../redux/feature/imagesSlice";
 
const DropDown=()=> {
    const [sortOption, setSortOption] = useState('oldest');
    const dispatch = useDispatch();
    dispatch(sortImages(sortOption));
    const handleSortChange = (e) => {
        setSortOption(e);
    };
  return (
    <div className="w-28 mx-5">
      <Select onChange={handleSortChange} value={sortOption} label="Sort By">
        <Option value="newest">Newest</Option>
        <Option value="oldest">Oldest</Option>
      </Select>
    </div>
  );
}
export default DropDown;
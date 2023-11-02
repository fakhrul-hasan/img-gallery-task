import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckBox } from "../../../redux/feature/imagesSlice";

const ImgCard = ({img, index}) => {
    const dispatch = useDispatch();
    const checked = useSelector(state=>state.imageData.checkbox);
    const isChecked = checked.includes(img?.url);

    const handleChecked=(e)=>{
        dispatch(handleCheckBox(e.target.id));
    }
  return (
    <div
      key={index}
      className={`col-span-${index === 0 ? 2 : 1} row-span-${
        index === 0 ? 2 : 1
      } border rounded-lg relative group cursor-pointer`}
    >
      <input
        type="checkbox"
        id={img?.url}
        onChange={handleChecked}
        className={`${isChecked ? 'visible z-50':'invisible'} group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4`}
      />
      <img
        style={{ pointerEvents: "" }}
        src={img?.url}
        alt=""
        className={`${isChecked ? 'opacity-50':'opacity-100'} group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300`}
      />
    </div>
  );
};

ImgCard.propTypes = {
    img: PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

export default ImgCard;

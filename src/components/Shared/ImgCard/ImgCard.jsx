import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckBox, reorderImages } from "../../../redux/feature/imagesSlice";
import { useDrag, useDrop } from "react-dnd";

const ImgCard = ({ img, index }) => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.imageData.checkbox);
  const isChecked = checked.includes(img?.url);

  const handleChecked = (e) => {
    dispatch(handleCheckBox(e.target.id));
  };

  //*handle drag
  const [,drag] = useDrag({
    type: 'IMAGE',
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (item) => {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex !== targetIndex) {
        dispatch(reorderImages({ startIndex: draggedIndex, endIndex: targetIndex }));
        item.index = targetIndex;
      }
    },
  });

  return (
        <div
        ref={(node) => drag(drop(node))}
         key={index}
          className={`border rounded-lg relative group hover:bg-gray-500`}
          style={{
            gridColumn: `span ${index === 0 ? 2:1}`,
            gridRow: `span ${index === 0 ? 2:1}`,
            border: '1px solid #ddd',
            padding: '8px',
            margin: '8px',
            cursor: 'move',
            transition: 'transform 0.3s ease-out', // Add transition for smooth movement
          }}
        >
          <input
            type="checkbox"
            id={img?.url}
            checked={isChecked}
            onChange={handleChecked}
            className={`${
              isChecked ? "visible z-50" : "invisible"
            } group-hover:visible absolute top-5 left-5 group-hover:z-50 h-4 w-4`}
          />
          <img
            src={img?.url}
            alt=""
            className={`${
              isChecked ? "opacity-50" : "opacity-100"
            } group-hover:brightness-50 rounded-lg group-hover:transition-all group-hover:duration-300 transition-all duration-300 h-full w-full`}
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

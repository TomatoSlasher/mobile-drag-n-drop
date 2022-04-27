import Box from "@mui/material/Box";
import { useDrag } from "react-dnd";

const Text = ({ name, setComponents }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setComponents((compnents) => [...compnents, name]);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <Box
      sx={{
        cursor: "grab",
      }}
      data-testid="box"
      ref={drag}
    >
      <input placeholder="Text..." disabled className="draggable-input" />
    </Box>
  );
};
export default Text;

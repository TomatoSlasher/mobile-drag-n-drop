import ButtonUI from "@mui/material/Button";
import { useDrag } from "react-dnd";

const Button = ({ name, setComponents }) => {
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
    <ButtonUI
      variant="contained"
      disableRipple
      sx={{
        cursor: "grab",
      }}
      data-testid="box"
      ref={drag}
    >
      Button
    </ButtonUI>
  );
};
export default Button;

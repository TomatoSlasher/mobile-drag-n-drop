import TextField from "@mui/material/TextField";
import { useDrag } from "react-dnd";

const Input = ({ name, setComponents }) => {
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
    <TextField
      id="filled-basic"
      label="Input"
      variant="filled"
      color="secondary"
      disabled
      data-testid="box"
      ref={drag}
    />
  );
};
export default Input;

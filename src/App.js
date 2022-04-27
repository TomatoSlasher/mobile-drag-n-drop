import "./App.css";

import Box from "@mui/material/Box";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";

import Text from "./components/draggable/Text";
import Button from "./components/draggable/Button";
import Input from "./components/draggable/Input";

import ButtonUI from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [componets, setComponets] = useState([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "#bfbfbf";
  } else if (canDrop) {
    backgroundColor = "#dbdbdb";
  }
  return (
    <div className="App-header">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 450,
            height: "100vh",
            backgroundColor: "#3d424d",
            color: "white",
          }}
        >
          <h2>Components</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 2,
            }}
          >
            <Input name="input" setComponents={setComponets} />
            <Text name="text" setComponents={setComponets} />

            <Button name="button" setComponents={setComponets} />
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 600,
              backgroundColor: "white",
              border: 3,

              borderColor: "black",
              borderRadius: 10,
              padding: 1.5,
            }}
          >
            <div ref={drop} data-testid="dustbin" style={{ height: "100%" }}>
              {componets.length > 0 ? (
                <Box
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    paddingX: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    overflow: "auto",
                    overflowX: "hidden",
                  }}
                >
                  {componets.map((component) => (
                    <>
                      {component === "text" && (
                        <input
                          placeholder="Text..."
                          style={{ color: "black" }}
                        />
                      )}
                      {component === "button" && (
                        <ButtonUI variant="contained">Button</ButtonUI>
                      )}
                      {component === "input" && (
                        <TextField
                          id="filled-basic"
                          label="Input"
                          variant="filled"
                        />
                      )}
                    </>
                  ))}
                </Box>
              ) : (
                <Box
                  sx={{
                    border: "3px dashed black",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    textAlign: "center",
                    height: "100%",
                    paddingX: 1,
                    backgroundColor,
                  }}
                >
                  <div>
                    <h4>Drag and Drop Components Here</h4>
                    <AddBoxTwoToneIcon sx={{ fontSize: 40 }} />
                  </div>
                </Box>
              )}
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;

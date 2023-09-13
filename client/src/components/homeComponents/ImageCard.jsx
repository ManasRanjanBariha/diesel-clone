import React from "react";
import Box from "@mui/material/Box";

export const ImageCard = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "35vw",
        background: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width:"100%",
          height:"35vw",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundImage:
            `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="image">
          <h1 style={{ color: "white" }}>{props.name}</h1>
        </div>
      </Box>
    </Box>
  );
};

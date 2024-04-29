import React from "react";
import { Typography } from "@mui/material";

const PageTitle = ({ title }) => {
  return (
    <Typography
      variant="h1"
      color="#333333"
      textAlign="center"
      sx={{
        fontSize: "5rem",
        fontWeight: 700,
        lineHeight: "6rem",
      }}
    >
      {title}
    </Typography>
  );
};

export default PageTitle;

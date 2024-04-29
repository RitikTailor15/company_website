import React from "react";
import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container
      sx={{
        marginTop: "8rem",
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;

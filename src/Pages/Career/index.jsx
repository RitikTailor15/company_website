import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";

const TypographyStyle = {
  fontSize: "1.25rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
};

const DescStyle = {
  fontSize: "1.125rem",
  fontWeight: 400,
  lineHeight: "1.875rem",
};

const Career = () => {
  return (
    <PageContainer>
      <PageTitle title="Career" />
      <Stack
        direction="row"
        sx={{ border: "1px solid black", padding: "1rem" }}
        gap={2}
      >
        <Box
          sx={{
            background: "rgba(217, 217, 217, 1)",
            width: "10rem",
            height: "10rem",
          }}
        />
        <Stack justifyContent="space-between">
          <Typography variant="body1" sx={TypographyStyle}>
            Service Name
          </Typography>
          <Typography variant="body1" sx={DescStyle}>
            Description
          </Typography>
          <Button
            sx={{
              background:
                "linear-gradient(92.57deg, #18B0E9 0.71%, #0D80DF 99.37%)",
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: "1.5rem",
              letterSpacing: "0.0125em",
              textAlign: "center",
              borderRadius: "24px",
              width: "fit-content",
              color: "#fff",
            }}
          >
            Primary button
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Career;

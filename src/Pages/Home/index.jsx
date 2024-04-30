import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";

import Banner from "../../Assets/Banner.png";
import PageContainer from "../../Components/PageContainer";

const Home = () => {
  return (
    <Box>
      <img
        src={Banner}
        alt="banner"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60vw",
        }}
      />
      <PageContainer>
        <Stack gap={5}>
          <Typography
            mt={4}
            sx={{
              fontSize: "5rem",
              fontWeight: 700,
              lineHeight: "4rem",
              textAlign: "left",
              maxWidth: "440px",
            }}
          >
            Provide team{" "}
            <Box
              Box
              component="span"
              style={{
                fontSize: "3.75rem",
                fontWeight: 400,
                textAlign: "left",
                color: "rgba(51, 51, 51, 0.6)",
              }}
            >
              to organizations irrespective of their size
            </Box>
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
              padding: "10px 20px",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </PageContainer>
    </Box>
  );
};

export default Home;

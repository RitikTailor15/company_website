import React from "react";
import { TextField, Stack, Typography, Button } from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";
import AboutUs from "../../Assets/AboutUs.png";
import Map from "../../Assets/Map.png";

const Contact = () => {
  return (
    <PageContainer>
      <PageTitle title="Contact Us" />
      <Stack direction="row" alignItems="center" gap={3}>
        <Stack gap={4}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
            metus.
          </Typography>
          <TextField label="Your name" />
          <TextField label="Your name" />
          <TextField label="Your name" />
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
            Primary button
          </Button>
        </Stack>
        <img src={AboutUs} alt="Contact us" width="50%" />
      </Stack>
      <Stack direction="row" alignItems="flex-start" gap={3} mt={4}>
        <img src={Map} alt="Map" width="50%" />
        <Stack gap={4}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
            }}
          >
            Address
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
            metus
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
            }}
          >
            Phone
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
            }}
          >
            Email
          </Typography>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Contact;

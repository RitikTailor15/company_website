import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import Banner from "../../Assets/Banner.png";
import LeaderShipHiring from "../../Assets/LeaderShipHiring.png";
import BuildingExtendedTeam from "../../Assets/BuildingExtendedTeam.png";
import HiringForClient from "../../Assets/HiringForClient.png";
import Dots from "../../Assets/Dots.png";
import TitleLines from "../../Assets/Title-Line.png";

const sectionTitle = {
  fontSize: "3.125rem",
  fontWeight: 700,
  lineHeight: "3.78rem",
  textAlign: "center",
};

const CountStyle = {
  fontSize: "4.375rem",
  fontWeight: 700,
  lineHeight: "5.295rem",
  textAlign: "center",
  color: "rgba(217, 217, 217, 1)",
};

const subTitleStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: "2.42rem",
  textAlign: "left",
};

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
        <Stack mt={25} alignItems="center">
          <Typography sx={sectionTitle}>Team Building</Typography>
          <img src={TitleLines} alt="TitleLines" width="fit-content" />
        </Stack>
        {/* Leading hiring Block */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={10}
        >
          <img src={LeaderShipHiring} alt="LeaderShipHiring" width="50%" />
          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Box component="span" sx={CountStyle}>
                01
              </Box>
              <img src={Dots} alt="Dots" width="fit-content" />
            </Stack>
            <Typography sx={subTitleStyle}>Leading Hiring</Typography>
            <ul>
              <li>Leadership Hiring</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>
                Tincidunt eget tincidunt porttitor proin tortor mattis sodales
                id rhoncus
              </li>
              <li>Cras tincidunt felis tortor lacus felis libero</li>
            </ul>
          </Stack>
        </Stack>
        {/* Building extended team */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={10}
          mt={5}
        >
          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Box component="span" sx={CountStyle}>
                02
              </Box>
              <img src={Dots} alt="Dots" width="fit-content" />
            </Stack>
            <Typography sx={subTitleStyle}>Leading Hiring</Typography>
            <ul>
              <li>Hiring and setting up teams in different locations</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>
                Tincidunt eget tincidunt porttitor proin tortor mattis sodales
                id rhoncus
              </li>
              <li>Cras tincidunt felis tortor lacus felis libero</li>
            </ul>
          </Stack>
          <img
            src={BuildingExtendedTeam}
            alt="BuildingExtendedTeam"
            width="50%"
          />
        </Stack>
        {/* Hiring Candidate for clients */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={10}
          mt={5}
        >
          <img src={HiringForClient} alt="HiringForClient" width="50%" />
          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Box component="span" sx={CountStyle}>
                03
              </Box>
              <img src={Dots} alt="Dots" width="fit-content" />
            </Stack>
            <Typography sx={subTitleStyle}>Leading Hiring</Typography>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>
                Tincidunt eget tincidunt porttitor proin tortor mattis sodales
                id rhoncus
              </li>
              <li>Cras tincidunt felis tortor lacus felis libero</li>
            </ul>
          </Stack>
        </Stack>
      </PageContainer>
    </Box>
  );
};

export default Home;

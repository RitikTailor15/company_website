import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import Banner from "../../Assets/Banner.png";
import LeaderShipHiring from "../../Assets/LeaderShipHiring.png";
import BuildingExtendedTeam from "../../Assets/BuildingExtendedTeam.png";
import HiringForClient from "../../Assets/HiringForClient.png";
import Dots from "../../Assets/Dots.png";
import TitleLines from "../../Assets/Title-Line.png";
import ThirdPartyArrangement from "../../Assets/ThirdPartyArrangement.png";
import OfficeSetup from "../../Assets/OfficeSetup.png";
import Consultant from "../../Assets/Consultant.png";
import PayrollManagement from "../../Assets/PayrollManagement.png";
import Business from "../../Assets/Bussiness.png";
import Footer from "../../Components/Footer";

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

const DescTypoStyle = {
  fontSize: "1.125rem",
  fontWeight: 400,
  lineHeight: "1.875re ",
  color: "rgba(90, 90, 90, 1)",
};

const serviceHeading = {
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: "2.42rem",
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
        {/* Services Section */}
        <Stack mt={10} alignItems="flex-start">
          <Typography sx={sectionTitle}>Services</Typography>
          <img src={TitleLines} alt="TitleLines" style={{ width: "13rem" }} />
        </Stack>
        <Stack direction="row" gap={5} mt={5} mb={10}>
          <Stack gap={3} width="50%">
            <Typography sx={DescTypoStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
            </Typography>
            <Stack
              gap={3}
              alignItems="center"
              justifyContent="center"
              sx={{
                background: "rgba(234, 244, 255, 1)",
                padding: "3rem 0",
                borderRadius: "2rem",
              }}
              mt={5}
            >
              <img src={OfficeSetup} alt="OfficeSetup" width="90%" />
              <Typography sx={serviceHeading}>Office Setup</Typography>
              <Typography sx={DescTypoStyle} textAlign="center">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </Typography>
            </Stack>
            <Stack gap={3} alignItems="center" justifyContent="center" mt={5}>
              <img
                src={PayrollManagement}
                alt="PayrollManagement"
                width="90%"
              />
              <Typography sx={serviceHeading}>Payroll Management</Typography>
              <Typography sx={DescTypoStyle} textAlign="center">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={3} width="50%">
            <Stack gap={3} alignItems="center" justifyContent="center">
              <img
                src={ThirdPartyArrangement}
                alt="ThirdPartyArrangement"
                width="90%"
              />
              <Typography sx={serviceHeading}>
                Third-party arrangement
              </Typography>
              <Typography sx={DescTypoStyle} textAlign="center">
                Vendors, Cafeteria etc. Lorem ipsum dolor sit amet consectetur.
                Purus tellus quam
              </Typography>
            </Stack>
            <Stack
              gap={3}
              alignItems="center"
              justifyContent="center"
              sx={{
                background: "rgba(234, 244, 255, 1)",
                padding: "3rem 0",
                borderRadius: "2rem",
              }}
              mt={5}
            >
              <img src={Consultant} alt="Consultant" width="90%" />
              <Typography sx={serviceHeading}>Consultancy</Typography>
              <Typography sx={DescTypoStyle} textAlign="center">
                Optimize cost, Execution strategy, Streamlining business Lorem
                ipsum dolor sit amet consectetur purus tellus quam
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack alignItems="flex-start" maxWidth="600px" gap={3}>
            <Box>
              <Typography sx={{ ...sectionTitle, textAlign: "left" }}>
                Let's Revolutionize Your Business
              </Typography>
              <img
                src={TitleLines}
                alt="TitleLines"
                style={{ width: "13rem" }}
              />
            </Box>
            <ul style={{ marginLeft: "1rem" }}>
              <li>Ads</li>
              <li>Increasing footprints</li>
            </ul>
            <Typography sx={DescTypoStyle}>
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
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
              Contact us
            </Button>
          </Stack>
          <img
            src={Business}
            alt="Bussiness"
            width="40%"
            style={{ alignSelf: "flex-end" }}
          />
        </Stack>
        <Footer />
      </PageContainer>
    </Box>
  );
};

export default Home;

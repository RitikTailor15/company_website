import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterTextStyle = {
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "1.625rem",
  color: "#FFF",
};

const Footer = () => {
  return (
    <footer>
      <Stack
        mt={4}
        direction="row"
        sx={{
          background: "rgba(22, 34, 81, 1)",
          padding: "20px 30px",
          borderRadius: "40px 40px 0px 0px",
        }}
        justifyContent="center"
        alignItems="center"
        gap={15}
      >
        <Link to="/about">
          <Typography sx={FooterTextStyle}>About us</Typography>
        </Link>
        <Link to="/career">
          <Typography sx={FooterTextStyle}>Career</Typography>
        </Link>
        <Link to="/pricing">
          <Typography sx={FooterTextStyle}>Pricing</Typography>
        </Link>
        <Link to="/cart">
          <Typography sx={FooterTextStyle}>Cart</Typography>
        </Link>
        <Link to="/contact">
          <Typography sx={FooterTextStyle}>Contact us</Typography>
        </Link>
      </Stack>
    </footer>
  );
};

export default Footer;

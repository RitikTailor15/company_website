import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Logo from "../..//Assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        sx={{
          position: "absolute",
          top: "2rem",
          width: "90vw",
          left: "0",
          borderRadius: "0px 30px 30px 0px",
          background: "#FFF",
          color: "#000",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="logo" />
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              AB Dummy Pte. Ltd
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={4}>
            <Link to="/about">About us</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact Us</Link>
            <Stack
              direction="row"
              gap={1}
              onClick={() => {
                navigate("/cart");
              }}
              sx={{
                border: "1px solid #18B0E94D",
                padding: "0.5rem 0.7rem",
                borderRadius: "25px",
                background: "#18B0E91A",
                cursor: "pointer",
              }}
            >
              Cart <AddShoppingCartIcon />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

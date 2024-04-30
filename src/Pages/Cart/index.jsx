import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";

const TypographyStyle = {
  fontSize: "1.25rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
};

const Cart = () => {
  return (
    <PageContainer>
      <PageTitle title="Cart" />
      <Stack direction="row" alignItems="flex-start" gap={3}>
        <Stack gap={2} flexGrow={1} maxWidth="70%">
          <Stack
            direction="row"
            sx={{ border: "1px solid black", padding: "1rem" }}
            gap={2}
            alignItems="center"
          >
            <Box
              sx={{
                background: "rgba(217, 217, 217, 1)",
                width: "10rem",
                height: "10rem",
              }}
            />
            <Typography variant="body1" sx={TypographyStyle}>
              Service Name
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ border: "1px solid black", padding: "1rem" }}
            gap={2}
            alignItems="center"
          >
            <Box
              sx={{
                background: "rgba(217, 217, 217, 1)",
                width: "10rem",
                height: "10rem",
              }}
            />
            <Typography variant="body1" sx={TypographyStyle}>
              Service Name
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={4}>
          <Typography variant="body1" sx={TypographyStyle}>
            Order Summary
          </Typography>
          <Typography variant="body1" sx={TypographyStyle}>
            Delivery Cost
          </Typography>
          <Typography variant="body1" sx={TypographyStyle}>
            Subtotal
          </Typography>
          <Typography variant="body1" sx={TypographyStyle}>
            Grand Total
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
            Proceed to checkout
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Cart;

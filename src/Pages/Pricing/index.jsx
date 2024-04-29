import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";

const Pricing = () => {
  const rows = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <PageContainer>
      <PageTitle title="Pricing" />
      <TableContainer
        sx={{
          marginTop: "2rem",
          "& .MuiTableCell-root": {
            border: "1px solid rgba(224, 224, 224, 1)",
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: "rgba(0, 0, 0, 0.1)" }}>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default Pricing;

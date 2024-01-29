import * as React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Orders() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>Your Tasks</Title>
        <Button
          sx={{
            width: "180px",
            color: "#05284C",
            borderColor: "#EE964B",
            ":hover": {
              backgroundColor: "#EE964B",
              color: "white",
            },
          }}
          variant="outlined"
          endIcon={<NavigateNextIcon />}
        >
          Projects Page
        </Button>
      </Box>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}></div>
    </React.Fragment>
  );
}

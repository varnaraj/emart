import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
// import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
function Home() {
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 1, m: 0, p: 0 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            width="100"
            src="../assets/353.jpg"
          />
        </Card>
      </div>
      
    </div>
  );
}

export default Home;

import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import { Fullscreen } from '@material-ui/icons';
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {
  const state=useSelector((state)=>state.handleCart)
  console.log(state)
  const styles = {
    paperContainer: {
      backgroundImage: `url(${"static/src/img/main.jpg"})`,
    },
  };
  return (
    <div>
      <Box
        m={2} //margin
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mr: 0,
          ml: 0,
          mt: 0,
          p: 1.5,
          //border: "2px solid",
          color: "gray",
          width: 1,
          height: 50,
          backgroundColor: "#d2d4d6",
        }}
      >
        <Box>
          <Link to="/">
            <Button>
              <Typography align="center" ml={3} fontSize={30} color={"black"}>
                <b>LA COLLECTION</b>
              </Typography>
            </Button>
          </Link>
        </Box>
        <Box
        // sx={{
        //   textTransform: "capitalize",
        //   // color: "gray",
        //   // //   fontWeight: "bold",
        //   // fontSize: 2,
        // }}
        >
          <Stack spacing={2} direction="row">
            <Link to="/">
              <Button
                sx={{
                  fontSize: 20,
                  color: "#263238",
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button
                sx={{
                  fontSize: 20,
                  color: "#263238",
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                Products
              </Button>
            </Link>
            <Link to="/about">
              <Button
                sx={{
                  fontSize: 20,
                  color: "#263238",
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                sx={{
                  fontSize: 20,
                  color: "#263238",
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                Contact
              </Button>
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            mr: 10,
          }}
        >
          <Stack direction="row" spacing={2}>
            <Link to="/login">
              <Button
                size="large"
                sx={{ color: "#263238", textTransform: "capitalize" }}
                variant="outlined"
                startIcon={<LoginIcon />}
                style={{
                  // borderRadius: 35,
                  borderColor: "#000000",
                  //backgroundColor: "#000000",
                  // padding: "18px 36px",
                  // fontSize: "18px",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="large"
                sx={{ color: "#263238", textTransform: "capitalize" }}
                variant="outlined"
                startIcon={<PersonAddIcon />}
                style={{
                  // borderRadius: 35,
                  borderColor: "#000000",
                  //backgroundColor: "#000000",
                  // padding: "18px 36px",
                  // fontSize: "18px",
                }}
              >
                Register
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                size="large"
                sx={{ color: "#263238", textTransform: "capitalize" }}
                variant="outlined"
                startIcon={<ShoppingCartIcon />}
                style={{
                  // borderRadius: 35,
                  borderColor: "#000000",
                  //backgroundColor: "#000000",
                  // padding: "18px 36px",
                  // fontSize: "18px",
                }}
              >
                Cart ({state.length}) 
                
                {/* some trouble */}
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
      <Paper style={styles.paperContainer}></Paper>

      {/* <img src"" */}
    </div>
  );
}

export default Navbar;

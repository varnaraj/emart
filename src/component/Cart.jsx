import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import Link from "@mui/material/Link";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { Fullscreen } from "@material-ui/icons";
function Cart() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        // setData(await response.clone().json());
        // setData(await cart.json());

        // setFilter(await response.json());
        // setFilter(await cart.json());

        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <div>
            <Skeleton height={150} width={150} />
          </div>
          <div>
            <Skeleton height={150} width={35} />
          </div>
          <div>
            <Skeleton height={150} width={35} />
          </div>
          <div>
            <Skeleton height={150} width={35} />
          </div>
        </Box>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <div>
        <div>
          <div
            m={2} //margin
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              mr: 0,
              ml: 0,
              mt: 0,
              p: 1.5,

              color: "gray",
              width: 1,
              height: 120,
            }}
          >
            {filter.map((product) => {
              return (
                <Box sx={{ flexGrow: 1, mb: 2, mt: 2 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={5}>
                      <div>
                        <Box
                          sx={{
                            p: "2",
                            mb: 2,
                            mt: 2,
                            ml: 30,
                            mr: 2,
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={product.image}
                            alt="Product Image"
                            height="200"
                            width="200"
                            //
                            sx={{
                              display: "flex",
                              // justifyContent: "space-around",
                              p: 1,
                              m: 4,

                              // bgcolor: "background.paper",
                              borderRadius: 1,
                            }}
                          ></img>
                        </Box>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div>
                        <Box
                          sx={{
                            mr: 20,
                            ml: 10,
                            mt: 2,
                          }}
                        >
                          <Box
                            sx={{
                              //   fontWeight: "bold",
                              fontSize: 25,
                            }}
                          >
                            <typography>{product.title}</typography>
                          </Box>

                          <Box
                            sx={{
                              fontWeight: "bold",
                              fontSize: 20,
                              mt: 2,
                            }}
                          >
                            <typography>
                              {product.qty}* $ {product.price}=
                              {product.qty * product.price}
                            </typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",

                              // bgcolor: "background.paper",
                              borderRadius: 1,
                            }}
                          >
                            <Box
                              sx={{
                                p: "2",
                                mt: 3,
                                ml: 1,
                                mr: 2,
                              }}
                            >
                              <Button
                                //    onClick={() => addProduct(product)}
                                size="large"
                                sx={{
                                  color: "#263238",
                                  textTransform: "capitalize",
                                }}
                                variant="outlined"
                                style={{
                                  // borderRadius: 35,
                                  borderColor: "#000000",
                                  //backgroundColor: "#000000",

                                  // fontSize: "18px",
                                }}
                              >
                                +
                              </Button>
                            </Box>

                            <Box>
                              <Button
                                //    onClick={() => addProduct(product)}
                                size="large"
                                sx={{
                                  color: "#263238",
                                  textTransform: "capitalize",
                                  mt: 3,
                                  ml: 1,
                                  mr: 2,
                                }}
                                variant="outlined"
                                style={{
                                  // borderRadius: 35,
                                  borderColor: "#000000",
                                  //backgroundColor: "#000000",

                                  // fontSize: "18px",
                                }}
                              >
                                -
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </div>
        </div>
        <div>
          <Button
            //    onClick={() => addProduct(product)}
            size="large"
            sx={{ color: "#263238", textTransform: "capitalize" }}
            variant="outlined"
            style={{
              // borderRadius: 35,
              borderColor: "#000000",
              //backgroundColor: "#000000",
              // padding: "18px 36px",
              // fontSize: "18px",
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Cart;

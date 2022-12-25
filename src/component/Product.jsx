import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    console.log(product);
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      console.log("https://fakestoreapi.com/products/${id}");
      const response = await fetch("https://fakestoreapi.com/products/" + id);

      setProduct(await response.clone().json());
      //console.log(loading);
      setLoading(false);
    };
    getProduct();
  }, []);
  //   },[input])

  //   const toUp=(x)=>{
  //     return x.toUpperCase
  //   }
  const Loading = () => {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={10}>
            <Grid item xs={5}>
              <div>
                <Skeleton height={400} />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div style={{ lineHeight: 2 }}>
                <Skeleton height={50} width={300} />
                <Skeleton height={75} />
                <Skeleton height={25} width={150} />
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 4,

            // bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Box>
            <img
              src={product.image}
              alt="Product Image"
              height="400"
              width="400"
              justifyContent="flex-start"
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

          <Box
            sx={{
              mr: 20,
              ml: 20,
            }}
          >
            <Box
              sx={{
                textTransform: "uppercase",
                color: "gray",
                //   fontWeight: "bold",
                fontSize: 20,
              }}
            >
              <typography>{product.category}</typography>
            </Box>
            <Box
              sx={{
                //   fontWeight: "bold",
                fontSize: 45,
              }}
            >
              <typography>{product.title}</typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: 20,
                mt: 0.5,
              }}
            >
              <typography>
                Rating {product.rating && product.rating.rate}{" "}
              </typography>
              <StarIcon sx={{ m: -0.52 }} />
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: 35,
                mt: 2,
              }}
            >
              <typography>$ {product.price}</typography>
            </Box>
            <Box
              sx={{
                // fontWeight: "bold",
                fontSize: 20,
                mt: 2,
              }}
            >
              <typography>{product.description}</typography>
            </Box>
            <Box
              sx={{
                // fontWeight: "bold",
                fontSize: 20,
                mt: 2,
              }}
            >
              <Button
                onClick={() => addProduct( product )}
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
              <Link href="/cart">
                <Button
                  size="large"
                  sx={{
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    ml: 1.5,
                  }}
                  variant="contained"
                  // color="palette.success.dark"
                  style={{
                    // borderRadius: 35,
                    // borderColor:
                    backgroundColor: "#000000",

                    // padding: "18px 36px",
                    // fontSize: "18px",
                  }}
                >
                  View Cart
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
}

export default Product;

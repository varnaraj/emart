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
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
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
            <Skeleton height={350} width={150} />
          </div>
          <div>
            <Skeleton height={350} width={350} />
          </div>
          <div>
            <Skeleton height={350} width={350} />
          </div>
          <div>
            <Skeleton height={350} width={350} />
          </div>
        </Box>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <div>
        <Box
          m={2} //margin
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            mr: 0,
            ml: 0,
            mt: 0,
            // p: 1.5,

            color: "gray",
            width: 1,
            height: 120,
          }}
        >
          <Stack justifyContent="center" spacing={2} direction="row">
            <Button
              onClick={() => setFilter(data)}
              sx={{ fontSize: 15, color: "#263238" }}
              variant="outlined"
            >
              All
            </Button>
            <Button
              onClick={() => filterProduct("men's clothing")}
              sx={{ fontSize: 15, color: "#263238" }}
              variant="outlined"
            >
              Men's clothing
            </Button>
            <Button
              onClick={() => filterProduct("women's clothing")}
              sx={{ fontSize: 15, color: "#263238" }}
              variant="outlined"
            >
              Women's clothing
            </Button>
            <Button
              onClick={() => filterProduct("jewelery")}
              sx={{ fontSize: 15, color: "#263238" }}
              variant="outlined"
            >
              Jewelery
            </Button>
            <Button
              onClick={() => filterProduct("electronics")}
              sx={{ fontSize: 15, color: "#263238" }}
              variant="outlined"
            >
              Electronic
            </Button>
          </Stack>
        </Box>
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
          <Grid container item spacing={-5} sx={{ ml: 5, mr: 5, mt: -2 }}>
            {filter.map((product) => {
              return (
                <Card sx={{ maxWidth: 250, m: 4 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      // height="250px"

                      
                      image={ product.image}
                      alt="Some Image"
                    />

                    <CardContent sx={{ ml: 2 }} align="center">
                      <Typography gutterBottom variant="h6" component="div">
                        <b> {product.title.substring(0, 12)}... </b>
                      </Typography>
                      <Typography variant="h5" color="black">
                        <b>${product.price}</b>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ ml: 10, mt: -2, mb: 1.5 }}>
                    <Link to={"/products/" + product.id}>
                      <Button variant="contained" size="big" color="primary">
                        Buy Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Box
          m={-3} //margin
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: 2,
            p: 0.5,
            // border: "2px solid",
          }}
        >
          <Typography align="center" m={5} fontSize={40} color={"black"}>
            <b>Latest Products</b>
          </Typography>
        </Box>
      </div>
      <div>
        <Divider
          variant="middle"
          sx={{
            ml: 15,
            mr: 15,
          }}
        />
      </div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Products;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById, addCartProduct } from "../store/product/action";
import { selectProductDetails } from "../store/product/selector";
import { Container, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Detailspage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  const addProduct = () => {
    return dispatch(
      addCartProduct({
        title: item?.title,
        price: item?.price,
        description: item?.description,
        image: item?.image,
      })
    );
  };

  return (
    <Container>
      <h1>Details</h1>

      <Card key={item?.id}>
        <h2>{item?.title}</h2>
        <p>{item?.description}</p>
        <img class="imageStyle" src={item?.image} alt={item?.id} />
        <div>
          <NavLink to={`/`}>
            <div>
              <Button>
                <span>Visit to Homepage</span>
              </Button>
            </div>
          </NavLink>{" "}
        </div>

        <Button type="submit" onClick={addProduct}>
          <span>Add to cart</span>
        </Button>
      </Card>
    </Container>
  );
}

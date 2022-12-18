import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts, deleteCartItem } from "../store/product/action";
import { selectCartProduct } from "../store/product/selector";
import { Button, Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartProduct);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCartProducts());
    }
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <Container>
      <h1>Cart</h1>

      {items?.map((item) => {
        return (
          <Card key={item?.id}>
            <h2>{item?.title}</h2>
            <img className="imageStyle" src={item?.image} alt={item?.id} />
            <p>{item?.price}</p>

            <div>
              <NavLink to={`/`}>
                <div>
                  <Button>
                    <span>Visit to homePage</span>
                  </Button>
                </div>
              </NavLink>{" "}
            </div>
            <div>
              <Button variant="danger" onClick={() => onDelete(item.id)}>
                Delete
              </Button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts, deleteCartItem } from "../store/product/action";
import { selectCartProduct } from "../store/product/selector";
import { Button, Container, Card, Col, Row } from "react-bootstrap";
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
      <h2>Total Cart Item : {items.length}</h2>

      {items?.map((item) => {
        return (
          <Card key={item?.id}>
            <Row style={{ margin: "50px" }}>
              <Col sm={7} style={{ width: "38rem" }} className="m-2">
                <img
                  class="mcard-img-top"
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                    backgroundSize: "cover",
                  }}
                  src={item?.image}
                  alt={item?.id}
                />
              </Col>

              <Col sm={5}>
                <Row
                  xs={1}
                  md={2}
                  className="g-4"
                  style={{ columnGap: "30px" }}
                >
                  <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>{item?.description}</Card.Text>
                    <Card.Text>€{item?.price}</Card.Text>
                  </Card.Body>

                  <div style={{ marginLeft: "120px" }}>
                    <Button variant="danger" onClick={() => onDelete(item.id)}>
                      Delete
                    </Button>
                  </div>
                </Row>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Container>
  );
}

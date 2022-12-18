import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById, addCartProduct } from "../store/product/action";
import { selectProductDetails ,selectCartItemCount} from "../store/product/selector";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Detailspage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(selectProductDetails);
  const cartItemsCount=useSelector(selectCartItemCount)

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
      <Card>
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
              alt={" "}
            />
          </Col>

          <Col sm={5}>
            <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
              <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <Card.Text>€{item?.price}</Card.Text>
              </Card.Body>

              <div style={{ marginLeft: "120px" }}>
                <NavLink to={`/`}>
                  <div>
                    <Button>
                      <span> Back to Homepage</span>
                    </Button>
                  </div>
                </NavLink>{" "}
              </div>
              <div style={{ marginLeft: "120px" }}>
                <Button type="submit" onClick={addProduct} >
                  <span>Add to cart</span>
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

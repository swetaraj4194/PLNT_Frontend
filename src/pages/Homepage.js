import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllProducts } from "../store/product/action";
import { selectProducts, selectCartItemCount } from "../store/product/selector";
import { Button, Container, Card } from "react-bootstrap";

export default function Homepage() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItemCount);

  //pagination
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch]);

  const getNextProducts = () => {
    setoffset(offset + 4);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 4);
  };

  return (
    <Container>
      <h1>Products</h1>{" "}
      <div>
        <NavLink to={`/addcart`}>
          <div>
            <Button>
              <span>Cart {cartItems}</span>
            </Button>
          </div>
        </NavLink>{" "}
      </div>
      {items?.map((item, index) => {
        return (
          offset <= index &&
          index <= offset + 3 && (
            <Card key={item?.id}>
              <h2>{item?.title}</h2>
              <img className="imageStyle" src={item?.image} alt={item?.id} />
              <p>{item?.price}</p>

              <div>
                <NavLink to={`/${item.id}`}>
                  <div>
                    <Button>
                      <span>Visit to Details Page</span>
                    </Button>
                  </div>
                </NavLink>{" "}
              </div>
            </Card>
          )
        );
      })}
      <div>
        <Button onClick={getPreviousProducts} disabled={offset === 0}>
          Previous
        </Button>
      </div>
      <div>
        <Button onClick={getNextProducts} disabled={offset >= items.length - 3}>
          Next
        </Button>
      </div>
    </Container>
  );
}

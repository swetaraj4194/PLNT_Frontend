import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllProducts } from "../store/product/action";
import { selectProducts } from "../store/product/selector";
import { Button, Container, Card, Row } from "react-bootstrap";

export default function Homepage() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);

  //pagination
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch]);

  const getNextProducts = () => {
    setoffset(offset + 8);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 8);
  };

  return (
    <Container>
      <h1>Products</h1>{" "}
      <Row
        xs={1}
        md={2}
        className=""
        style={{ columnGap: "15px", rowGap: "15px" }}
      >
        {items?.map((item, index) => {
          return (
            offset <= index &&
            index <= offset + 7 && (
              <div class="card" style={{ width: "18rem" }} key={item?.id}>
                <img
                  class="mcard-img-top"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "250px",
                    backgroundSize: "cover",
                  }}
                  src={item?.image}
                  alt={" "}
                />
                <h2 className="h6 p-2 m-0 text-lowercase">{item?.title} </h2>
                <p class="p-2 m-0">{item?.price}</p>

                <div>
                  <NavLink to={`/${item.id}`}>
                    <div>
                      <Button>
                        <span>Visit to Details Page</span>
                      </Button>
                    </div>
                  </NavLink>{" "}
                </div>
              </div>
            )
          );
        })}
        <div className="mt-4 d-flex" class="mx-auto">
          <Button
            className="m-2 web-color"
            onClick={getPreviousProducts}
            disabled={offset === 0}
          >
            Previous
          </Button>

          <Button
            className="m-2 web-color"
            onClick={getNextProducts}
            disabled={offset >= items.length - 3}
          >
            Next
          </Button>
        </div>
      </Row>
    </Container>
  );
}

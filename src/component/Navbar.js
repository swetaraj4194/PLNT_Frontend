import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../store/product/selector";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Navbar() {
  const cartItemsCount = useSelector(selectCartItemCount);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="/">
        Shop
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addcart">
              <Badge color="primary">
                <ShoppingCartIcon />{" "}
              </Badge>
              <span className="countstyle">{cartItemsCount} Item added</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

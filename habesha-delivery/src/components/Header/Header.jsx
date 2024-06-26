import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { cartItems } = useCart();

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Habesha-Delivery</h5>
          </div>

          {/* ======= menu ======= */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======== nav right icons ========= */}

          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <Link to="/cart">
                <i class="ri-shopping-basket-line"></i>
                <span className="cart__badge">{cartItems.length}</span>
              </Link>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

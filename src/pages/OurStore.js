import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <Container class1="home-wrapper-2 py-5 store-wrapper">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <ul className="ps-0">
                <li>Watch</li>
                <li>TV</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <h5 className="sub-title">Avaliability</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label className="form-check-label" htmlFor="">
                  In Stock (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label className="form-check-label" htmlFor="">
                  Out of Stock (0)
                </label>
              </div>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="0.00"
                  />
                  <label htmlFor="floatingInput1">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="0.00"
                  />
                  <label htmlFor="floatingInput2">To</label>
                </div>
              </div>
              <h5 className="sub-title">Colors</h5>
              <Color />
              <h5 className="sub-title">Size</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="color-1"
                />
                <label className="form-check-label" htmlFor="color-1">
                  S (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="color-2"
                />
                <label className="form-check-label" htmlFor="color-2">
                  M (2)
                </label>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Headphone
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Mobile
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Wire
                </span>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div className="random-products mb-3 d-flex">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="w-50">
                  <h5>Some Product</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>&#8372;100</b>
                </div>
              </div>
              <div className="random-products d-flex">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="w-50">
                  <h5>Some Product</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>&#8372;100</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, Low to High</option>
                    <option value="price-descending">Price, High to Low</option>
                    <option value="created-ascending">Date, Old to New</option>
                    <option value="created-descending">Date, New to Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/grid-04.png"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/grid-03.png"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/grid-02.png"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/grid-01.png"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

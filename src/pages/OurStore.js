import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { getProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState(null);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    let newColors = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newTags.push(element.tags);
      newColors.push(element.color);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newTags);
  }, [productState]);
  useEffect(() => {
    getAllProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);
  const getAllProducts = () => {
    dispatch(getProducts({ sort, tag, brand, category, minPrice, maxPrice }));
  };
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
                {categories &&
                  { ...new Set(categories) }.map((item, index) => {
                    return (
                      <li key={index} onClick={() => setCategory(item)}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="0.00"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInput1">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="0.00"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInput2">To</label>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-3">
              <h3 className="sub-title">Product Tags</h3>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                {tags &&
                  { ...new Set(tags) }.map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => setTag(item)}
                        className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                      >
                        {item}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className="mb-3">
              <h3 className="sub-title">Product Brands</h3>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                {brands &&
                  { ...new Set(brands) }.map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => setBrand(item)}
                        className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                      >
                        {item}
                      </span>
                    );
                  })}
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
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, Low to High</option>
                    <option value="-price">Price, High to Low</option>
                    <option value="createdAt">Date, Old to New</option>
                    <option value="-createdAt">Date, New to Old</option>
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
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

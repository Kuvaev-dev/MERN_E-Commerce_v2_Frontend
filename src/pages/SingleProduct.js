import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Dynamic Product Name"} />
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-2 py-5 description-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit mollitia vel atque, omnis ad harum hic alias
                  consequatur sit molestiae rerum voluptatum quia natus velit
                  doloribus, illo cumque debitis id!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-wrapper-2 py-5 reviews-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 popular-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

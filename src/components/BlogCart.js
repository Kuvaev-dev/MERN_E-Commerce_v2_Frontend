import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">1 Jan, 2024</p>
            <h5 className="title">Something New Was Happened</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              temporibus rerum non. Aliquam facilis provident odio atque.
            </p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCart;

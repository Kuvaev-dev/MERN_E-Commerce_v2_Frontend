import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Some Blog Name"} />
      <BreadCrumb title="Dynamic Some Blog Name" />
      <div className="home-wrapper-2 py-5 blog-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <FaArrowLeft className="fs-4"/> Go Back to Blogs
                </Link>
                <h3 className="title">Something New Was Happened</h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  ea, molestiae architecto odio molestias laborum suscipit velit
                  doloribus temporibus omnis voluptas dignissimos, tempora
                  explicabo labore earum nobis dolorem, repellat ut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

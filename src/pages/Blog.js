import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import moment from "moment";
import { getBlogs } from "../features/blogs/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = () => {
    dispatch(getBlogs());
  };
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="home-wrapper-2 py-5 blog-wrapper">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <ul className="ps-0">
                <li>Watch</li>
                <li>TV</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex gap-10">
              <div className="row">
                {blogState &&
                  blogState?.map((item, index) => {
                    return (
                      <div className="col-6 mb-3" key={index}>
                        <BlogCard
                          id={item?._id}
                          title={item?.title}
                          description={item?.description}
                          image={item?.images[0]?.url}
                          date={moment(item?.createdAt).format(
                            "MMMM Do YYYY, h:mm a"
                          )}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;

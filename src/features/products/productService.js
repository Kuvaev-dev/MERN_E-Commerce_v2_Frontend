import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (productID) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    {
      productID,
    },
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
};

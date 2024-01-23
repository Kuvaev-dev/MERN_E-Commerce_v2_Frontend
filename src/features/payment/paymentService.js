import axios from "axios";
import { paymentRequest, paymentSuccess, paymentFail } from "./paymentSlice";
import { base_url } from "../../utils/axiosConfig";
import { config } from "../../utils/axiosConfig";

export const makePayment = (paymentData) => async (dispatch) => {
  try {
    dispatch(paymentRequest());
    const response = await axios.post(
      `${base_url}payment`,
      paymentData,
      config
    );
    dispatch(paymentSuccess(response.data));
  } catch (error) {
    dispatch(
      paymentFail(error.response ? error.response.data.error : "Server Error")
    );
  }
};

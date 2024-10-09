import { useLocation } from "react-router-dom";
// import styles from "./SingleProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/products/thunk";
import { useEffect, useState } from "react";
import { selectProduct } from "../../redux/products/selectors";
import axios from "axios";

const SingleProduct = () => {
  const [calculatedProduct, setCalculatedProduct] = useState({});
  // const { singleProduct } = styles;
  const { pathname } = useLocation();
  const productId = pathname.replace("/products/", "");
  const dispatch = useDispatch();
  const { _id } = useSelector(selectProduct);

  const product = {
    power: 20,
    size: 10,
    amount: 1,
    id: _id,
    nicotineType: "sól",
  };

  const calculateProduct = async (product) => {
    try {
      const data = await axios.post(
        "http://localhost:3100/api/products/calculate",
        product
      );
      const { priceForOneBottle } = data.data.message;
      setCalculatedProduct(priceForOneBottle);
      console.log(calculatedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {
        <button
          type="button"
          onClick={() => {
            calculateProduct(product);
          }}
        >
          dasdas
        </button>
      }
    </>
  );
};

export default SingleProduct;

import { useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { ImArrowRight2 } from "react-icons/im";
import styles from "./SingleProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/products/thunk";
import { useEffect, useState } from "react";
import { selectProduct } from "../../redux/products/selectors";
import axios from "axios";

const SingleProduct = () => {
  const [calculatedProduct, setCalculatedProduct] = useState({
    bottle: 1.4,
    nicotine: 5,
    aroma: 3.6,
    base: 0.04,
    sum: 9.64,
  });
  // const { singleProduct } = styles;
  const { pathname } = useLocation();
  const productId = pathname.replace("/products/", "");
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  const calculateProduct = async (product) => {
    try {
      console.log(product);

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
  console.log(product);

  useEffect(() => {
    dispatch(getProduct(productId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const onChangeChandler = (e) => {
    console.log(e.target.form.amount.value);
  };
  const {
    buySection,
    buySection__img,
    buyForm__price,
    buySection__tastName,
    buySection__brend,
    buyForm,
    buyForm__range,
    buyForm__select,
    buyForm__priceBox,
    buyForm__btn,
    buyForm__toggle,
  } = styles;
  return (
    <main>
      <section className={buySection}>
        <img
          className={buySection__img}
          src={product.imgUrl}
          alt={product.tastName}
        />

        <div>
          <h4 className={buySection__brend}>{product.brend}</h4>
          <h5 className={buySection__tastName}>{product.tastName}</h5>
          <form onChange={onChangeChandler} className={buyForm}>
            <label className={buyForm__range} htmlFor="power">
              Moc (mg) 6
              <input type="range" name="power" min="0" max="50" />
              Aromat (%) 10
              <input
                type="range"
                name="aroma"
                min="0"
                max="30"
                defaultValue={10}
              />
            </label>
            <label className={buyForm__toggle} htmlFor="nicotineType">
              <span>Sól</span>
              <ImArrowRight2 />
              <span>Zasada</span>
            </label>
            <label className={buyForm__select} htmlFor="amount">
              <div>
                <input type="radio" name="amount" value={10} />
                <span>10ml</span>
              </div>
              <div>
                <input type="radio" name="amount" value={30} />
                <span>30ml</span>
              </div>
              <div>
                <input type="radio" name="amount" value={60} />
                <span>60ml</span>
              </div>
            </label>
            <div className={buyForm__priceBox}>
              <p className={buyForm__price}>{calculatedProduct.sum} zł</p>
              <button className={buyForm__btn} type="submit">
                <LuShoppingCart color="#fff" size={25} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;

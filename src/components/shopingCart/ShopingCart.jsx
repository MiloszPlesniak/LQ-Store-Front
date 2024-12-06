import styles from "./shopingCart.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectShopingCartList } from "../../redux/orders/selectors";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteFromCart } from "../../redux/orders/slice";
import { addOrder } from "../../redux/orders/thunk";
const ShopingCart = () => {
  const {
    shopingCart,
    shopingCart__list,
    shopingCart__item,
    shopingCart__btn,
    shopingCart__form,
  } = styles;
  const [delivery, setDelivery] = useState(false);
  const dispatch = useDispatch();
  const shopingCartList = useSelector(selectShopingCartList);
  console.log(shopingCartList);
  const handleDelete = (id) => {
    //funkcja, która usuwa produkt z koszyka
    dispatch(deleteFromCart(id));
  };
  console.log(shopingCartList.length);

  const sum = shopingCartList
    .map((item) => item.price)
    .reduce((prev, el) => {
      const sum = prev + el;
      return sum;
    }, 0);
  const fixedSum = Number(sum.toFixed(2));
  console.log(fixedSum);

  const placeOrderHandle = async (e) => {
    e.preventDefault();
    const order = shopingCartList.map((item) => {
      return {
        id: item.id,
        dosage: item.dosage,
        size: item.size,
        power: item.power,
        amount: item.amount,
        nicotineType: item.nicotineType,
      };
    });
    const orderList = { order, comment: delivery ? fixedSum + 19.9 : fixedSum };
    dispatch(addOrder(orderList));
  };
  return (
    <section className={shopingCart}>
      {shopingCartList.length > 0 ? (
        <>
          <h3>Produkty w koszyku</h3>
          <ul className={shopingCart__list}>
            <li className={shopingCart__item}>
              <p></p>
              <p>Aromat</p>
              <p>Moc (mg)</p>
              <p>Pojemnośc (ml)</p>
              <p>Ilość</p>
              <p>cena</p>
            </li>
            {shopingCartList.map((item, i) => {
              console.log(i);

              return (
                <li className={shopingCart__item} key={i}>
                  <img src={item.img} alt={item.tastName} />
                  <Link to={`/products/${item.id}`}>
                    <p>{item.brend}</p>
                    <p>{item.tastName}</p>
                  </Link>
                  <span>{item.power}</span>
                  <span>{item.size}</span>
                  <span>{item.amount}</span>
                  <span>{item.price}</span>
                  <button
                    className={shopingCart__btn}
                    type="button"
                    onClick={() => handleDelete(i)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </li>
              );
            })}
          </ul>
          <form onSubmit={placeOrderHandle} className={shopingCart__form}>
            <div>
              <input
                onClick={() => {
                  setDelivery(true);
                }}
                type="radio"
                required
                value="inpost"
                name="option"
                id="delivery"
              />
              <label htmlFor="delivery">Wysyłka do paczkomatu</label>
              <input
                onClick={() => {
                  setDelivery(false);
                }}
                type="radio"
                value="place"
                name="option"
                id="personalCollect"
              />
              <label htmlFor="personalCollect">Odbiór osobisty</label>
            </div>
            <div>
              <span>Wartośc:</span>
              <span>{fixedSum}</span>
            </div>
            {delivery && (
              <div>
                <span>Dostawa:</span>
                <span>19.90zł</span>
              </div>
            )}
            <p>Suma {delivery ? fixedSum + 19.9 : fixedSum} </p>
            <button type="submit">Zamów</button>
          </form>
        </>
      ) : (
        <h2>Twój koszyk jest pusty</h2>
      )}
    </section>
  );
};
export default ShopingCart;

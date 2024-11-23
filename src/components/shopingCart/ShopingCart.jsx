import styles from "./shopingCart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectShopingCart } from "../../redux/orders/selectors";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteFromCart } from "../../redux/orders/slice";
const ShopingCart = () => {
  const {
    shopingCart,
    shopingCart__list,
    shopingCart__item,
    shopingCart__btn,
  } = styles;
  const dispatch = useDispatch();
  const shopingCartList = useSelector(selectShopingCart);
  console.log(shopingCartList);
  const handleDelete = (id) => {
    //funkcja, która usuwa produkt z koszyka
    // dispatch(deleteFromCart(id));
  };
  return (
    <section className={shopingCart}>
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
              <div>
                <p>{item.brend}</p>
                <p>{item.tastName}</p>
              </div>
              <span>{item.power}</span>
              <span>{item.size}</span>
              <span>{item.amount}</span>
              <span>{item.price}</span>
              <button className={shopingCart__btn} type="button">
                <RiDeleteBinLine />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ShopingCart;

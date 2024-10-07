import { Link } from "react-router-dom";
import styles from "./ProductItem.module.scss";
const ProductItem = ({ item }) => {
  const {
    productItem,
    productItem__img,
    productItem__textBox,
    productItem__brand,
    productItem__tastName,
  } = styles;
  // console.log(item);
  const { brend, imgUrl, tastName } = item;
  return (
    <Link>
      <figure className={productItem}>
        <img className={productItem__img} src={imgUrl} alt={tastName} />
        <figcaption className={productItem__textBox}>
          <h6 className={productItem__brand}>{brend}</h6>
          <p className={productItem__tastName}>{tastName}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
export default ProductItem;
// do dokończenia klasy ułożenie etc

import ProductItem from "../productItem/ProductItem";
import { useSelector } from "react-redux";
import { selectProductList } from "../../redux/products/selectors";
import styles from "./ProductList.module.scss";
const ProductList = () => {
  const produstList = useSelector(selectProductList);
  const { products, products__list, products__item } = styles;
  const visibilityProduct = produstList.filter((item) => item.visibility);
  return (
    <section className={products}>
      <ul className={products__list}>
        {visibilityProduct.map((item) => {
          return (
            <li className={products__item} key={item._id}>
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ProductList;

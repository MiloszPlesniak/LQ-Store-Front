import { useDispatch } from "react-redux";
import Advertisement from "../../components/advertisement/Advertisement";
import { getProductsList } from "../../redux/products/thunk";
import { useEffect } from "react";

import ProductList from "../../components/productList/ProductList";

const Products = () => {
  const product = {
    url: "https://res.cloudinary.com/dxcklt1ox/image/upload/t_sharped/v1728077452/a_l_shinigami_fdly5z.png",
    companyName: "a&l ultimate",
    tasteName: "shinigami",
    descryption:
      "delikatne połączenie landrynek i soczystego zielonego jabłuszka",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <section>
      <Advertisement product={product} />
      <ProductList />
    </section>
  );
};
export default Products;

import styles from "./RecommendedProducts.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
const RecommendedProducts = ({ array }) => {
  const {
    products,
    products__list,
    products__item,
    products__box,
    products__img,
    products__textBox,
    products__brend,
    products__tast,
    products__listBox,
    products__button,
  } = styles;
  const [transform, setTransform] = useState(0);
  const handleLeftClick = () => {
    if (transform >= 0) {
      setTransform((array.length - 2) * -150);
    } else {
      setTransform(transform + 150);
    }
  };
  const handleRightClick = () => {
    if (transform <= (array.length - 2) * -150) {
      setTransform(0);
    } else {
      setTransform(transform - 150);
    }
  };
  return (
    <section className={products}>
      <h4>Produkty które mogą ci się spodobać:</h4>
      <div>
        <IoIosArrowBack
          style={{ width: "100px" }}
          className={products__button}
          onClick={handleLeftClick}
        />
        <div className={products__listBox}>
          <ul
            className={products__list}
            style={{
              transform: `translateX(${transform}px)`,
              transition: "transform 0.3s",
            }}
          >
            {array.map((item) => {
              return (
                <li className={products__item} key={item._id}>
                  <Link to={`/products/${item._id}`}>
                    <figure className={products__box}>
                      <img className={products__img} src={item.imgUrl} alt="" />
                      <figcaption className={products__textBox}>
                        <h6 className={products__brend}>{item.brend}</h6>
                        <p className={products__tast}>{item.tastName}</p>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <IoIosArrowForward
          style={{ width: "100px" }}
          className={products__button}
          onClick={handleRightClick}
        />
      </div>
    </section>
  );
};
export default RecommendedProducts;

import style from "./Advertisement.module.scss";

const Advertisement = ({ product }) => {
  const { companyName, tasteName, descryption, url } = product;
  const {
    advertisement,
    advertisement__productBox,
    advertisement__textBox,
    advertisement__title,
    advertisement__tastName,
    advertisement__descryption,
  } = style;
  return (
    <section className={advertisement}>
      <div className={advertisement__productBox}>
        <img src={url} alt="product" />
      </div>
      <div className={advertisement__textBox}>
        <h4 className={advertisement__title}>{companyName}</h4>
        <p className={advertisement__tastName}>{tasteName}</p>
        <p className={advertisement__descryption}>{descryption}</p>
      </div>
    </section>
  );
};
export default Advertisement;
//  dodać w bazie wartośc ulubione które będzie zaznaczał admin i to one będą się wyświetlały w banerach

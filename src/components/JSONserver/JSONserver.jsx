import { useState, useEffect } from "react";
import styles from "./JSONserver.module.scss";

export const JSONserver = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/products")
      .then((loadedData) => {
        return loadedData.json();
      })
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>JSON Server</h2>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => {
          return (
            <div key={id}>
              {name} - {price}
            </div>
          );
        })
      )}
    </>
  );
};

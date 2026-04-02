import { useState, useEffect } from "react";
import styles from "./JSONserver.module.scss";

const PRODUCTS_MOCK = [
  {
    id: "1",
    name: "tv",
    price: 1000,
  },
  {
    id: "2",
    name: "sm",
    price: 1500,
  },
  {
    id: "3",
    name: "fan",
    price: 500,
  },
];

export const JSONserver = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    new Promise((resolve) => {
      setTimeout(() => resolve({ json: () => PRODUCTS_MOCK }), 3000);
    })
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
      {/* <div className={styles.loader}></div> */}
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

import { useState, useEffect } from "react";
import styles from "./PutPatchDelete.module.scss";

export const PutPatchDelete = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
  }, [refreshProductsFlag]);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);
    fetch("http://localhost:3000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "New vacuum cleaner",
        price: 4500,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("vacuum cleaner is add, the server answer", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsCreating(false));
  };

  const requestUpdateSmartphone = () => {
    setIsUpdating(true);
    fetch("http://localhost:3000/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "Smart",
        price: 100,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("smartphone is cheaper", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsUpdating(false));
  };

  const requestDeleteFan = () => {
    setIsDeleting(true);
    fetch("http://localhost:3000/products/3", {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("fan is deleted", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsDeleting(false));
  };

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
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        add vacuum cleaner
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        update smartphone
      </button>
      <button disabled={isDeleting} onClick={requestDeleteFan}>
        delete fan
      </button>
    </>
  );
};

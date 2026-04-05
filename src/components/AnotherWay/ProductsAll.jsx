import { useEffect, useState } from "react";
import styles from "./ProductsAll.module.scss";

export const ProductsAll = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "Пылесос",
        price: 4690,
      }),
    })
      .then((response) => response.json())
      .then((newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      })
      .finally(() => setIsCreating(false));
  };

  const requestUpdateSmartphone = () => {
    setIsUpdating(true);
    fetch("http://localhost:3000/products/2", {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "Смартфон",
        price: 17900,
      }),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          ),
        );
      })
      .finally(() => setIsUpdating(false));
  };

  const requestDeleteHairDryer = () => {
    setIsDeleting(true);
    fetch("http://localhost:3000/products/3", {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== "3"),
        );
      })
      .finally(() => setIsDeleting(false));
  };

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => (
          <div key={id}>
            {name} - {price} руб
          </div>
        ))
      )}
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        Добавить пылесос
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        Обновить смартфон
      </button>
      <button disabled={isDeleting} onClick={requestDeleteHairDryer}>
        Удалить фен
      </button>
    </div>
  );
};

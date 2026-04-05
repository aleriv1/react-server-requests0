import { useState, useEffect } from "react";

export const useRequestGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/products")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { products, setProducts, isLoading };
};

export const useRequestAddVacuumCleaner = (setProducts) => {
  const [isCreating, setIsCreating] = useState(false);

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
      .then((rawResponse) => rawResponse.json())
      .then((newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      })
      .finally(() => setIsCreating(false));
  };

  return { requestAddVacuumCleaner, isCreating };
};

export const useRequestUpdateSmartphone = (setProducts) => {
  const [isUpdating, setIsUpdating] = useState(false);

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
      .then((rawResponse) => rawResponse.json())
      .then((updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          ),
        );
      })
      .finally(() => setIsUpdating(false));
  };

  return { requestUpdateSmartphone, isUpdating };
};

export const useRequestDeleteHairDryer = (setProducts) => {
  const [isDeleting, setIsDeleting] = useState(false);

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

  return { requestDeleteHairDryer, isDeleting };
};

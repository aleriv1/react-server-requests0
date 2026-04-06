import { useEffect, useState } from "react";

export const useFrbRequestGetProducts = (refreshProductsFlag) => {
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
  }, [refreshProductsFlag]);

  return { products, isLoading };
};

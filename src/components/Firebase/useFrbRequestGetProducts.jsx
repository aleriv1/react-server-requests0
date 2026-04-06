import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

export const useFrbRequestGetProducts = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productsDbRef = ref(db, "products");

    return onValue(productsDbRef, (snapshot) => {
      const loadedProducts = snapshot.val() || {};
      setProducts(Object.entries(loadedProducts));
      setIsLoading(false);
    });
  }, []); // no more dependencies needed, because there is onValue

  return { products, isLoading };
};

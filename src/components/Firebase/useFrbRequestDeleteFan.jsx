import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../../firebase";

export const useFrbRequestDeleteFan = (
  refreshProductsFlag,
  setRefreshProductsFlag,
) => {
  const [isDeleting, setIsDeleting] = useState(true);

  const requestDeleteFan = () => {
    const productRemove = ref(db, "products/003");

    remove(productRemove)
      .then((response) => {
        console.log("fan is deleted", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsDeleting(false));
  };

  return { isDeleting, requestDeleteFan };
};

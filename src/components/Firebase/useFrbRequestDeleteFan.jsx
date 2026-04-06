import { useState } from "react";

export const useFrbRequestDeleteFan = (
  refreshProductsFlag,
  setRefreshProductsFlag,
) => {
  const [isDeleting, setIsDeleting] = useState(false);

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

  return { isDeleting, requestDeleteFan };
};
